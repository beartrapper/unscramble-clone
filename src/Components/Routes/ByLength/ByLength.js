import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilter,
    faSearch,
    faBars,
    faHeart,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
// import { Animated } from "react-animated-css";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
import AdSense from 'react-adsense';


const Length = () => {
    const [inputValue, setInputValue] = useState("");
    const [err, setErr] = useState(false);
    const [updateState, setUpdateState] = useState(false);
    const [Array1, setArray1] = useState([]);
    const [Array2, setArray2] = useState([]);
    const [Array3, setArray3] = useState([]);
    const [Array4, setArray4] = useState([]);
    const [Array5, setArray5] = useState([]);
    const [Array6, setArray6] = useState([]);
    const [Array7, setArray7] = useState([]);
    const [Array8, setArray8] = useState([]);
    const [Array9, setArray9] = useState([]);
    const [loading, setLoading] = useState(false);
    const [render, setRender] = useState(false);

    const [width, setWidth] = React.useState(window.innerWidth);
    const [clickedTrue, setClickedTrue] = useState(false);

  let tempArray1 = [];
  let tempArray2 = [];
  let tempArray3 = [];
  let tempArray4 = [];
  let tempArray5 = [];
  let tempArray6 = [];
  let tempArray7 = [];
  let tempArray8 = [];
  let tempArray9 = [];

  const Filter = e => {
    e.preventDefault();
    if(clickedTrue)
      setClickedTrue(false);
    else 
      setClickedTrue(true)
  }

  const onClicked = async (e) => {
    e.preventDefault();
    setLoading(true);

    setUpdateState(false);
    if (inputValue.length == 0 || inputValue.length == 1) setErr(true);
    else {
      setErr(false);
    
      

      let value = {
        "letters": inputValue.toUpperCase()
      };

      const ActualArray = await axios.get('http://localhost:5000/api/unscramble');

      // ActualArray = [...new Set(ActualArray)];
      

      console.log(ActualArray);
    

      for (let count = 0; count < ActualArray.data.length; count++) {
        console.log(ActualArray.data[count].word.length);

        if (ActualArray.data[count].word.length == 2) {
          // Array1.push(ActualArray.data[count]);
          tempArray1.push(ActualArray.data[count]);
          setArray1([... Array1, ActualArray.data[count]]);

          // console.log(tempArray);
        } else if (ActualArray.data[count].word.length == 3){
        setArray2([... Array2, ActualArray.data[count]]);
        tempArray2.push(ActualArray.data[count]);

        }


          // tempArray2.push(ActualArray.data[count]);
        else if (ActualArray.data[count].word.length == 4){
          tempArray3.push(ActualArray.data[count]);
        setArray3([... Array3, ActualArray.data[count]]);
          
        }
        else if (ActualArray.data[count].word.length == 5){
          tempArray4.push(ActualArray.data[count]);
        setArray4([... Array4, ActualArray.data[count]]);

        }
        else if (ActualArray.data[count].word.length == 6){
          tempArray5.push(ActualArray.data[count]);
        setArray5([... Array5, ActualArray.data[count]]);

        }
        else if (ActualArray.data[count].word.length == 7){
          tempArray6.push(ActualArray.data[count]);
        setArray6([... Array6, ActualArray.data[count]]);
          
        }
        else if (ActualArray.data[count].word.length == 8){
          tempArray7.push(ActualArray.data[count]);
        setArray7([... Array7, ActualArray.data[count]]);
          
        }
        else if (ActualArray.data[count].word.length == 9){
          tempArray8.push(ActualArray.data[count]);
        setArray8([... Array8, ActualArray.data[count]]);

        }
        else if (ActualArray.data[count].word.length == 10){
          tempArray9.push(ActualArray.data[count]);
        setArray9([... Array9, ActualArray.data[count]]);

        }
      }
      setArray1(tempArray1);
      setArray2(tempArray2);
      setArray3(tempArray3);
      setArray4(tempArray4);
      setArray5(tempArray5);
      setArray6(tempArray6);
      setArray7(tempArray7);
      setArray8(tempArray8);
      setArray9(tempArray9);
      setRender(true);
    }
    // setLoading(false);
  };

    const handleInput = e => {
        setRender(false);

        setLoading(false);
        if (e.target.value.length != 0 && e.target.value.length >= 10) {
            console.log(e.target.value);
            setErr(true);
        } else if (e.target.value.length < 10) {
            setErr(false);
            let value = e.target.value;
            console.log(value);

            value = value.replace(/[^A-Za-z]/gi, "");

            setInputValue(value);
        }
    };

    //number assignment
    const assignNumber = str => {
        let num = 0;
        for (let count = 0; count < str.length; count++)
            if (
                str[count] == "a" ||
                str[count] == "e" ||
                str[count] == "i" ||
                str[count] == "o" ||
                str[count] == "u" ||
                str[count] == "l" ||
                str[count] == "s" ||
                str[count] == "t" ||
                str[count] == "r"
            )
                num++;
            else if (str[count] == "d" || str[count] == "g") num = num + 2;
            else if (
                str[count] == "b" ||
                str[count] == "c" ||
                str[count] == "m" ||
                str[count] == "p"
            )
                num = num + 3;
            else if (
                str[count] == "f" ||
                str[count] == "h" ||
                str[count] == "v" ||
                str[count] == "w" ||
                str[count] == "y"
            )
                num = num + 4;
            else if (str[count] == "k") num = num + 5;
            else if (str[count] == "j" || str[count] == "x") num = num + 8;
            else if (str[count] == "q" || str[count] == "z") num = num + 10;
        return num;
    };

    const options = [
        { value: "one", label: "One" },
        { value: "two", label: "Two", className: "myOptionClassName" },
        {
            type: "group",
            name: "group1",
            items: [
                { value: "three", label: "Three", className: "myOptionClassName" },
                { value: "four", label: "Four" }
            ]
        },
        {
            type: "group",
            name: "group2",
            items: [
                { value: "five", label: "Five" },
                { value: "six", label: "Six" }
            ]
        }
    ];

    return (
      <>
      <div id="Intro" className="back-ground">
      <AdSense.Google
        client='ca-pub-2213646733957075'
        slot='2997026131'
        // style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      />
        {/* <AdComponentTop /> */}
        </div>

<nav class="navbar navbar-expand-lg navbar-light bg-light bottom-border-nav">
    <div class="container-fluid">
<a class="navbar-brand" href="#">Scrabbler</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ml-auto">
<Link to="/unscramble">

  <li class={"nav-item " + (window.location.href == "http://localhost:3000/unscramble" ? 'active' : ' ')}>
    <a class="nav-link" href="#">Unscrambler</a>
  </li>
  </Link>
  <Link to="/wwf">

  <li class={"nav-item " + (window.location.href == "http://localhost:3000/wwf" ? 'active' : ' ')}>
    <a class="nav-link" href="#">WWF</a>
  </li>
  </Link>
  <li>
  <div class="dropdown">
<button class="dropbtn">Words List</button>
<div class="dropdown-content">
<Link to="/start">

<a class="dropdown-item" href="#">Words starting with</a>
</Link>
<Link to="/end">

<a class="dropdown-item" href="#">Words that end with</a>
</Link>
<Link to="/length">

<a class="dropdown-item" href="#">Words by length</a>
</Link>
</div>
</div>
  </li>
 

</ul>

</div>
</div>
</nav>



  <div>


    <div className="header">


   
<div className="row">

  
      <div className="s006 col-lg-8">
        <form onSubmit={e => {e.preventDefault();onClicked(e)}}>
          <fieldset className="fieldset">
            <legend className="legend">
              <h1 class="tmp">Your Letters.. My Words!</h1>
            </legend>
        
            <div className="inner-form">
              <div className="input-field">
      

            <button
              onClick={onClicked}
              className="btn-search"
              type="button"
            >
            {loading ? (
              <FontAwesomeIcon icon={faCheck} color="green" />
            ) : (
                <FontAwesomeIcon icon={faSearch} color="grey" />
              )}
            </button>


               

                <input
                  onChange={handleInput}
                  id="search"
                  type="text"
                  placeholder="Type here.."
                  style={{
                    border: err ? "5px solid #d80b0b" : "5px solid #005a9c"
                  }}
                />
              </div>
            </div>

       
          
{clickedTrue  ?  <>
<input className="input" placeholder="Starts with" type="text" />



<input className="input" placeholder="Contains" type="text" />



      <input className="input" placeholder="Ends In" type="text" /> </>:<></>}
              {clickedTrue ? <div className="pt-2">
                <div class="button search-btn-class" onClick={Filter}>
                <div className="btn btn-lg">Hide</div>
                  </div>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <div class="button mr-3 search-btn-class button-grey">
                  <div className="btn btn-lg ">Search</div>
                  </div>  </div>:
                  <div class="button" onClick={Filter}>
                  <span class="button__mask"></span>
                  <span class="button__text">
                    <FontAwesomeIcon icon={faFilter} />
                    &nbsp; Advanced
                  </span>
                  <span class="button__text button__text--bis">
                    <FontAwesomeIcon icon={faFilter} />
                    &nbsp; Advanced
              </span></div>}
             
            
          </fieldset>
        </form>
      </div>
    
      <div className="col-lg-4">
        {/* <AdComponent /> */}
        <AdSense.Google
        client='ca-pub-2213646733957075'
        slot='2997026131'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      />
    </div>
    
    </div>

    </div>
  </div>


  <div className="container">
<ul>



   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 2
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >2 Letters Words</li></button></div></Link>
   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 3
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >3 Letters Words</li></button></div></Link>
   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 4
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >4 Letters Words</li></button></div></Link>
   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 5
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >5 Letters Words</li></button></div></Link>
   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 6
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >6 Letters Words</li></button></div></Link>
   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 7
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >7 Letters Words</li></button></div></Link>
   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 8
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >8 Letters Words</li></button></div></Link>
   <Link to={{
            pathname: "/letterwords",
            state: {
                letter: 9
            }
            
        }} > <div className="row"><button className="btn btn-link">  <li >9 Letters Words</li></button></div></Link>
   <div className="row"><button className="btn btn-link">  <li >2 Letter Words star K</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >3 Letter Words star L</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >2 Letter Words star M</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >5 Letter Words star N</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >4 Letter Words star O</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >6 Letter Words star P</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >2 Letter Words star Q</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >4 Letter Words star R</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >3 Letter Words star S</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >2 Letter Words star T</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >6 Letter Words star U</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >7 Letter Words star V</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >3 Letter Words star W</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >2 Letter Words star X</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >3 Letter Words star Y</li></button></div>
   <div className="row"><button className="btn btn-link">  <li >2 Letter Words starting Z</li></button></div>




</ul>
</div> 



  {render ? (
   
    <div class="container">
      <div class="row py-5">
        <div class="col-12">
          <table id="example" class="table table-hover responsive nowrap">
            <thead class="background-thead">
              <tr>
                <th>Words</th>
                <th>Scrabble</th>
                <th>Words With Friends</th>

              </tr>
            </thead>
            <tbody>
              {tempArray9.length != 0 ? (
                tempArray9.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-grey mr-3">10</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                       
                     
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
                
              {tempArray8.length != 0 ? (
                tempArray8.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-pink mr-3">9</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                       
                        
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
              {tempArray7.length != 0 ? (
                tempArray7.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-blue mr-3">8</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                       
                      
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
              {tempArray6.length != 0 ? (
                tempArray6.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-red mr-3">7</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                    
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
              {tempArray5.length != 0 ? (
                tempArray5.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-orange mr-3">6</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                      
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
              {tempArray4.length != 0 ? (
                tempArray4.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-grey mr-3">5</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                    
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
              {tempArray3.length != 0 ? (
                tempArray3.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-brown mr-3">4</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                       
                  
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
              {Array2.length != 0 ? (
                Array2.map(item => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-pink mr-3">3</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}

              {Array1.length != 0 ? (
                Array1.map(item => {
                  console.log('here are the' + item)
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            <div class="d-flex align-items-center">
                              <div class="avatar avatar-blue mr-3">2</div>

                              <div class="">
                                <p class="font-weight-bold mb-0">{item.word}</p>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td>{item.scrabble}</td>
                        <td>{item.wwf}</td>
                       
                
                      </tr>
                    </>
                  );
                })
              ) : (
                  <></>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
      <></>
    )}

  <Footer />
</>

    );
};

export default Length;

