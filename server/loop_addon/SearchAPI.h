#ifndef SEARCH_API_H
#define SEARCH_API_H

#include <iostream>
#include <map>
#include <string>
#include <vector>
#include <unistd.h>

class SearchAPI {
private:
    std::map<std::string, int> wordMap;
    std::vector<std::string> startingWith(char letter);
    std::vector<std::string> endingWith(char letter);
    std::vector<std::string> endingWithStr(std::string str);
public:
    SearchAPI() { initialize(); }
    
    void initialize();
    
    std::vector<std::string> findWordsWithLetters(std::string letters);
    
    std::string search(std::map<std::string, std::string> jsonDict);
};

inline bool endsWith(std::string const & value, std::string const & ending)
{
    if (ending.size() > value.size()) return false;
    return std::equal(ending.rbegin(), ending.rend(), value.rbegin());
}

std::string paramStr(std::string param) {
    return std::string("\"") + param + std::string("\"");
}

std::vector<std::string> SearchAPI::startingWith(char letter) {
    std::vector<std::string> words;
    for (std::map<std::string, int>::iterator it = wordMap.begin(); it != wordMap.end(); it ++) {
        if (it->first.at(0) == letter) {
            words.push_back(it->first);
        }
    }
    return words;
}

std::vector<std::string> SearchAPI::endingWith(char letter) {
    std::vector<std::string> words;
    for (std::map<std::string, int>::iterator it = wordMap.begin(); it != wordMap.end(); it ++) {
        if (it->first[strlen(it->first.c_str()) - 1] == letter) {
            words.push_back(it->first);
        }
    }
    return words;
}

std::vector<std::string> SearchAPI::endingWithStr(std::string str) {
    std::vector<std::string> words;
    for (std::map<std::string, int>::iterator it = wordMap.begin(); it != wordMap.end(); it ++) {
        if (endsWith(it->first, str)) {
            words.push_back(it->first);
        }
    }
    return words;
}

std::string getJsonFromArray(std::vector<std::string> words) {
    std::string json;
    json += "[";
    for (int i=0; i<words.size(); i++) {
        std::string word = words[i];
        int pointsScrabble = (rand() % 20) + 1;
        int pointsWWF = (rand() % 20) + 1;
        json += "{";
        json +=  paramStr("word") + std::string(" : ") + paramStr(word) + ",";
        json += paramStr("wwf") + " : " + std::to_string(pointsWWF) + ",";
        json += paramStr("scrabble") + " : "  + std::to_string(pointsScrabble);
        json += "}" + std::string(((i == words.size() - 1) ? " " : ","));
    }
    json += "]";
    return json;
}

std::vector<std::string> getTempWords() {
    std::vector<std::string> words;
    for (int i=0; i<26; i++) {
        char letter = 'A' + i;
        std::string word;
        for (int j=0; j<10; j++) {
            word += letter;
            words.push_back(word);
        }
    }
    
    int solLength = rand() % words.size();
    std::vector<std::string> solutions;
    
    for (int i=0; i<solLength; i++) {
        std::string word = words[rand()%words.size()];
        solutions.push_back(word);
    }
    
    return solutions;
}

std::string SearchAPI::search(std::map<std::string, std::string> jsonDict) {
    std::vector<std::string> solutions;

    if (jsonDict["startsWidth"].length() == 1) {
        char letter = (jsonDict["startsWidth"].c_str())[0];
        solutions = startingWith(letter);
    }
    
    if (jsonDict["endsWidth"].length() == 1) {
        char letter = (jsonDict["endsWidth"].c_str())[0];
        solutions = endingWith(letter);
    }
    
    if (jsonDict["endsWidth"].length() > 1) {
        char* str = (char*)(jsonDict["endsWidth"].c_str());
        solutions = endingWithStr(str);
    }
    
    if (jsonDict["letters"].length() > 1) {
        solutions = findWordsWithLetters(jsonDict["letters"]);
    }
    
    std::vector<std::string> words;
    for (int i=0; i<26; i++) {
        char letter = 'A' + i;
        std::string word;
        for (int j=0; j<10; j++) {
            word += letter;
            words.push_back(word);
        }
    }
    
    return getJsonFromArray(solutions);
}

void SearchAPI::initialize() {

    char word[255] = {0};
    FILE* f = fopen("scrabble.txt", "rt");
    
    if (!f)
        return;
    
    while (!feof(f)) {
        fgets(word, 255, f);
        if (word[strlen(word) - 1] == '\n')
            word[strlen(word) - 1] = '\0';
        wordMap[word] = 1;
    }
    fclose(f);
}

std::vector<std::string> SearchAPI::findWordsWithLetters(std::string letters) {
    while (letters.size() > 7)
       letters = letters.substr(0, letters.size() - 1);
    
    std::vector<std::string> solutions;
    
    char wordLetters2[3] = {0};
    for (int i=0; i<letters.size()-1; i++)
        for (int j=i+1; j<letters.size(); j++) {
            wordLetters2[0] = letters[i];
            wordLetters2[1] = letters[j];
            std::string word = wordLetters2;
            
            if (wordMap[word] == 1) {
                solutions.push_back(word);
            }
        }
    
    char wordLetters3[4] = {0};
    for (int i=0; i<letters.size()-2; i++)
        for (int j=i+1; j<letters.size()-1; j++) {
            for (int k=j+1; k<letters.size(); k++) {
                wordLetters3[0] = letters[i];
                wordLetters3[1] = letters[j];
                wordLetters3[2] = letters[k];
                std::string word = wordLetters3;
            
                if (wordMap[word] == 1) {
                    solutions.push_back(word);
                }
            }
        }
    
    char wordLetters4[5] = {0};
    for (int i=0; i<letters.size()-2; i++)
        for (int j=i+1; j<letters.size()-1; j++) {
            for (int k=j+1; k<letters.size(); k++) {
                for (int z=k+1; z<letters.size(); z++) {
                    wordLetters4[0] = letters[i];
                    wordLetters4[1] = letters[j];
                    wordLetters4[2] = letters[k];
                    wordLetters4[3] = letters[z];
                    std::string word = wordLetters4;
            
                    if (wordMap[word] == 1) {
                        solutions.push_back(word);
                    }
                }
            }
        }
    
    if (solutions.size() == 0)
        solutions = getTempWords();
    
    return solutions;
}


#endif
