import React, { useState, useEffect } from "react";
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
import { Link, useLocation } from "react-router-dom";
import { scrabble } from "../../../dictFiles/scrabble";

const LetterEndNav = () => {
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
  const location = useLocation();


  useEffect(() => {
   
  
    if(location.state.letter == "ing"){
        let ActualArray = [];

        scrabble.map((item, key) => {
            const lengthy = item.length;
    
      
            if(item[lengthy - 1] == 'g'){
                if(item[lengthy - 2] == 'n'){
                if(item[lengthy - 3] == 'i')
                ActualArray.push(item)
    
            }}
        })
    
    
          let tempArray1 = [];
          let tempArray2 = [];
          let tempArray3 = [];
          let tempArray4 = [];
          let tempArray5 = [];
          let tempArray6 = [];
          let tempArray7 = [];
          let tempArray8 = [];
          let tempArray9 = [];
    
          for (let count = 0; count < ActualArray.length; count++) {
            
    
            if (ActualArray[count].length == 2) {
              // Array1.push(ActualArray[count]);
              tempArray1.push(ActualArray[count]);
              // console.log(tempArray);
            } else if (ActualArray[count].length == 3)
              tempArray2.push(ActualArray[count]);
            else if (ActualArray[count].length == 4)
              tempArray3.push(ActualArray[count]);
            else if (ActualArray[count].length == 5)
              tempArray4.push(ActualArray[count]);
            else if (ActualArray[count].length == 6)
              tempArray5.push(ActualArray[count]);
            else if (ActualArray[count].length == 7)
              tempArray6.push(ActualArray[count]);
            else if (ActualArray[count].length == 8)
              tempArray7.push(ActualArray[count]);
            else if (ActualArray[count].length == 9)
              tempArray8.push(ActualArray[count]);
            else if (ActualArray[count].length == 10)
              tempArray9.push(ActualArray[count]);
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
        
  else { 
   
      let ActualArray = [];

    scrabble.map((item, key) => {
        const lengthy = item.length;

  
        if(item[lengthy - 1] == location.state.letter)
            ActualArray.push(item)
    })


      let tempArray1 = [];
      let tempArray2 = [];
      let tempArray3 = [];
      let tempArray4 = [];
      let tempArray5 = [];
      let tempArray6 = [];
      let tempArray7 = [];
      let tempArray8 = [];
      let tempArray9 = [];

      for (let count = 0; count < ActualArray.length; count++) {
        

        if (ActualArray[count].length == 2) {
          // Array1.push(ActualArray[count]);
          tempArray1.push(ActualArray[count]);
          // console.log(tempArray);
        } else if (ActualArray[count].length == 3)
          tempArray2.push(ActualArray[count]);
        else if (ActualArray[count].length == 4)
          tempArray3.push(ActualArray[count]);
        else if (ActualArray[count].length == 5)
          tempArray4.push(ActualArray[count]);
        else if (ActualArray[count].length == 6)
          tempArray5.push(ActualArray[count]);
        else if (ActualArray[count].length == 7)
          tempArray6.push(ActualArray[count]);
        else if (ActualArray[count].length == 8)
          tempArray7.push(ActualArray[count]);
        else if (ActualArray[count].length == 9)
          tempArray8.push(ActualArray[count]);
        else if (ActualArray[count].length == 10)
          tempArray9.push(ActualArray[count]);
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
}, []);

const Filter = e => {
    e.preventDefault();
    if(clickedTrue)
      setClickedTrue(false);
    else 
      setClickedTrue(true)
  }

  const onClicked = (e) => {
      e.preventDefault();
  }

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

;

  return (
    <>
      <div>
      <div class="header ">
        <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
    <Link to="/unscramble">
    <li class="pure-menu-item pure-menu-selected">
      <a href="#" class="pure-menu-link">Unscrambler</a></li>
      </Link>
      <Link to="/wwf">
        <li class="pure-menu-item pure-menu-selected">
          <a href="#" class="pure-menu-link">WWF Cheat</a></li>
          </Link>
          
        <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a href="#" id="menuLink1" class="pure-menu-link">List</a>
            <ul class="pure-menu-children">
            <Link to="/start">
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Words that start with</a></li>
                </Link>
                <Link to="/end">
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Words that end with</a></li>
                </Link>  <Link to="/length">
                <li class="pure-menu-item"><a href="#" class="pure-menu-link"> Words by length</a></li>
                </Link>
            </ul>
        </li>
    </ul>
</div>
          {/* <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
          > */}
          <div className="s006">
            <form onSubmit={e => {e.preventDefault();onClicked(e)}}>
              <fieldset className="fieldset">
                <legend className="legend">
                  <h1 class="tmp">Your Letters..</h1>
                  <h3 class="tmp2">My Words!</h3>
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
                      placeholder="Type here"
                      style={{
                        border: err ? "5px solid #d80b0b" : "5px solid #005a9c"
                      }}
                    />
                  </div>
                </div>
                {/* <Animated
                    animationIn="fadeInDown"
                    animationOut="fadeOut"
                    isVisible={true}
                  > */}
                <div className="suggestion-wrap">
                  {/* <span className="opacity">Words starting from A</span>
                      <span className="opacity">Words starting from B</span>
                      <span className="opacity">Words ending with ing</span> */}
                </div>
                {/* </Animated> */}
                {clickedTrue  ?  <>
  <input className="input" placeholder="Starts with" type="text" />
  


  <input className="input" placeholder="Contains" type="text" />
  


  <input className="input" placeholder="Ends In" type="text" /> </>:<></>}

  

                <div class="button" onClick={Filter}>
                  {clickedTrue ? <>
                    <span class="button__mask"></span>
                  <span class="button__text">
                    &nbsp; Hide
                  </span>
                  <span class="button__text button__text--bis">
                    &nbsp; Hide
                  </span></> :<>
                  <span class="button__mask"></span>
                  <span class="button__text">
                    <FontAwesomeIcon icon={faFilter} />
                    &nbsp; Filter
                  </span>
                  <span class="button__text button__text--bis">
                    <FontAwesomeIcon icon={faFilter} />
                    &nbsp; Filter
                  </span></>}
                 
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {render ? (
       
        <div class="container">
          <div class="row py-5">
            <div class="col-12">
              <table id="example" class="table table-hover responsive nowrap">
                <thead>
                  <tr>
                    <th>Words</th>
                    <th>Scrabble</th>
                    <th>Words With Friends</th>

                    <th>save!</th>
                  </tr>
                </thead>
                <tbody>
                  {Array9.length != 0 ? (
                    Array9.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-grey mr-3">10</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a class="dropdown-item" href="#">
                                    <i class="bx bxs-pencil mr-2"></i> Edit
                                    Profile
                                  </a>
                                  <a class="dropdown-item text-danger" href="#">
                                    <i class="bx bxs-trash mr-2"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                      <></>
                    )}
                  {Array8.length != 0 ? (
                    Array8.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-pink mr-3">9</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a class="dropdown-item" href="#">
                                    <i class="bx bxs-pencil mr-2"></i> Edit
                                    Profile
                                  </a>
                                  <a class="dropdown-item text-danger" href="#">
                                    <i class="bx bxs-trash mr-2"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                      <></>
                    )}
                  {Array7.length != 0 ? (
                    Array7.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-blue mr-3">8</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                          
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                      <></>
                    )}
                  {Array6.length != 0 ? (
                    Array6.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-red mr-3">7</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a class="dropdown-item" href="#">
                                    <i class="bx bxs-pencil mr-2"></i> Edit
                                    Profile
                                  </a>
                                  <a class="dropdown-item text-danger" href="#">
                                    <i class="bx bxs-trash mr-2"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                      <></>
                    )}
                  {Array5.length != 0 ? (
                    Array5.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-orange mr-3">6</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a class="dropdown-item" href="#">
                                    <i class="bx bxs-pencil mr-2"></i> Edit
                                    Profile
                                  </a>
                                  <a class="dropdown-item text-danger" href="#">
                                    <i class="bx bxs-trash mr-2"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                      <></>
                    )}
                  {Array4.length != 0 ? (
                    Array4.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-grey mr-3">5</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a class="dropdown-item" href="#">
                                    <i class="bx bxs-pencil mr-2"></i> Edit
                                    Profile
                                  </a>
                                  <a class="dropdown-item text-danger" href="#">
                                    <i class="bx bxs-trash mr-2"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                      <></>
                    )}
                  {Array3.length != 0 ? (
                    Array3.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-brown mr-3">4</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a class="dropdown-item" href="#">
                                    <i class="bx bxs-pencil mr-2"></i> Edit
                                    Profile
                                  </a>
                                  <a class="dropdown-item text-danger" href="#">
                                    <i class="bx bxs-trash mr-2"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </td>
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
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                                <div
                                  class="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a class="dropdown-item" href="#">
                                    <i class="bx bxs-pencil mr-2"></i> Edit
                                    Profile
                                  </a>
                                  <a class="dropdown-item text-danger" href="#">
                                    <i class="bx bxs-trash mr-2"></i> Remove
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  ) : (
                      <></>
                    )}

                  {Array1.length != 0 ? (
                    Array1.map(item => {
                      return (
                        <>
                          <tr>
                            <td>
                              <a href="#">
                                <div class="d-flex align-items-center">
                                  <div class="avatar avatar-blue mr-3">2</div>

                                  <div class="">
                                    <p class="font-weight-bold mb-0">{item}</p>
                                    {/* <p class="text-muted mb-0">julie_89@example.com</p> */}
                                  </div>
                                </div>
                              </a>
                            </td>
                            <td>{assignNumber(item)}</td>
                            <td>{assignNumber(item)}</td>
                            <td>
                              <button className="btn btn-sm btn-primary">
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  color="maroon"
                                />
                              </button>
                            </td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btnn btn-sm btn-icon"
                                  type="button"
                                  id="dropdownMenuButton2"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i
                                    class="bx bx-dots-horizontal-rounded"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Actions"
                                  ></i>
                                </button>
                            
                              </div>
                            </td>
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

export default LetterEndNav;
