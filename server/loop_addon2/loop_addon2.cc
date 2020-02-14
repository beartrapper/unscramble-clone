#include <node.h>
#include <stdlib.h>
#include "SearchAPI.h"

// https://stackoverflow.com/questions/43298444/how-to-handle-a-map-argument-in-a-nodejs-c-module

namespace loop_addon {

SearchAPI* searchAPI= new SearchAPI;

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local; 
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;
using v8::Map;




//start


void loopPerformance(const FunctionCallbackInfo<Value> &args) {
Isolate *isolate = args.GetIsolate();
// map contains the javascript dictionary
std::map<std::string, std::string> map;
map["letters"] = "AEIOUBCAB";
std::string resultStr = searchAPI->search(map);
args.GetReturnValue().Set(String::NewFromUtf8(isolate, (char*)resultStr.c_str(), v8::NewStringType::kNormal).ToLocalChecked());
}

//end





// void loopPerformance(const FunctionCallbackInfo<Value> &args) {
//     Isolate *isolate = args.GetIsolate();
    
//     /*
//     if(args.Length() < 1 || !args[0]->IsObject()) {
//       isolate->ThrowException(Exception::TypeError(
//       String::NewFromUtf8(isolate, "Error: One object expected")));
//       return;
//     }
//     */
    
//     /*
//     Local<v8::Context> context = isolate->GetCurrentContext();
//     Local<v8::Object> obj = args[0]->ToObject(context).ToLocalChecked();
//     Local<v8::Array> props = obj->GetOwnPropertyNames(context).ToLocalChecked();

//         std::map<std::string, std::string> map;
//     char buffer[1024];
//     for(int i = 0, l = props->Length(); i < l; i++) {
//       Local<v8::String> localKey = props->Get(i).As<v8::String>();
//       Local<v8::String> localVal = obj->Get(context, localKey).ToLocalChecked().As<v8::String>();;
//       (*localKey)->WriteUtf8(isolate, buffer);
//       std::string key = std::string(buffer);
//       (*localVal)->WriteUtf8(isolate, buffer);
//       std::string val = std::string(buffer);
    
//         map[key] = val;
//       std::cout << "key=" << key << ":value=" << val << std::endl;
//     }
//     */
//     // map contains the javascript dictionary
//     std::map<std::string, std::string> map;
//     map["letters"] = "AEIOUBCAB";
//     std::string result = searchAPI->search(map);

//     args.GetReturnValue().Set(String::NewFromUtf8(isolate, result.c_str())); // Send response to JavaScript
// }

void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "sumNow", loopPerformance);
}

NODE_MODULE(loop_addon, init)
}
