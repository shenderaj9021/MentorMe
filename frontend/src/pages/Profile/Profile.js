import React from 'react';
import "./Profile.css";
import {Row,Col, Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Profile() {
  return (
    <>
         
        <div className="container">
          <Row className="titlee">
          <div class="text-center"><br/>Profile page <br/></div>
          </Row>
        </div>
   
        <Form action="">
          <div className="completeprofile">
            <div class="container">
            <Row >
              <h3 class="dtype">Personal details</h3>
              <br />
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6}>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4}  className="fname">
                    first name
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" class="field" name="firstname" id="firstname" required />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                    Date of birth
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="date" class="field" name="firstname" id="firstname" required />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                    Local Address
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" class="field" name="firstname" id="firstname" required />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                    state
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" class="field" name="firstname" id="firstname" required />
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6}>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                    Last name
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" class="field" name="firstname" id="firstname" required />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                      Age
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                        <Form.Select className="field" name="age" id="age">
                          <option className="opt1" value="none">--select--</option>
                          <option className="optt" value="1">1</option>
                          <option className="optt" value="2">2</option>
                          <option className="optt" value="3">3</option>
                          <option className="optt" value="4">4</option>
                          <option className="optt" value="4">4</option>
                          <option className="optt" value="5">5</option>
                          <option className="optt" value="6">6</option>
                          <option className="optt" value="7">7</option>
                          <option className="optt" value="8">8</option>
                          <option className="optt" value="9">9</option>
                          <option className="optt" value="10">10</option>
                          <option className="optt" value="11">11</option>
                          <option className="optt" value="12">12</option>
                          <option className="optt" value="13">13</option>
                          <option className="optt" value="14">14</option>
                          <option className="optt" value="15">15</option>
                          <option className="optt" value="16">16</option>
                          <option className="optt" value="17">17</option>
                          <option className="optt" value="18">18</option>
                          <option className="optt" value="19">19</option>
                          <option className="optt" value="20">20</option>
                          <option className="optt" value="21">21</option>
                          <option className="optt" value="22">22</option>
                          <option className="optt" value="23">23</option>
                          <option className="optt" value="24">24</option>
                          <option className="optt" value="25">25</option>
                          <option className="optt" value="26">26</option>
                          <option className="optt" value="27">27</option>
                          <option className="optt" value="28">28</option>
                          <option className="optt" value="29">29</option>
                          <option className="optt" value="30">30</option>
                          <option className="optt" value="31">31</option>
                          <option className="optt" value="32">32</option>
                          <option className="optt" value="33">33</option>
                          <option className="optt" value="34">34</option>
                          <option className="optt" value="35">35</option>
                          <option className="optt" value="36">36</option>
                          <option className="optt" value="37">37</option>
                          <option className="optt" value="38">38</option>
                          <option className="optt" value="39">39</option>
                          <option className="optt" value="40">40</option>
                          <option className="optt" value="41">41</option>
                          <option className="optt" value="42">42</option>
                          <option className="optt" value="43">43</option>
                          <option className="optt" value="44">44</option>
                          <option className="optt" value="45">45</option>
                          <option className="optt" value="46">46</option>
                          <option className="optt" value="47">47</option>
                          <option className="optt" value="48">48</option>
                          <option className="optt" value="49">49</option>
                          <option className="optt" value="50">50</option>
                          <option className="optt" value="51">51</option>
                          <option className="optt" value="52">52</option>
                          <option className="optt" value="53">53</option>
                          <option className="optt" value="54">54</option>
                          <option className="optt" value="55">55</option>
                          <option className="optt" value="56">56</option>
                          <option className="optt" value="57">57</option>
                          <option className="optt" value="58">58</option>
                          <option className="optt" value="59">59</option>
                          <option className="optt" value="60">60</option>
                          <option className="optt" value="61">61</option>
                          <option className="optt" value="62">62</option>
                          <option className="optt" value="63">63</option>
                          <option className="optt" value="64">64</option>
                          <option className="optt" value="65">65</option>
                          <option className="optt" value="60">60</option>
                          <option className="optt" value="61">61</option>
                          <option className="optt" value="62">62</option>
                          <option className="optt" value="63">63</option>
                          <option className="optt" value="64">64</option>
                          <option className="optt" value="65">65</option>
                          <option className="optt" value="66">66</option>
                          <option className="optt" value="67">67</option>
                          <option className="optt" value="68">68</option>
                          <option className="optt" value="69">69</option>
                          <option className="optt" value="70">70</option>
                          <option className="optt" value="71">71</option>
                          <option className="optt" value="72">71</option>
                          <option className="optt" value="73">73</option>
                          <option className="optt" value="74">74</option>
                          <option className="optt" value="75">75</option>
                          <option className="optt" value="76">76</option>
                          <option className="optt" value="77">77</option>
                          <option className="optt" value="78">78</option>
                          <option className="optt" value="79">79</option>
                          <option className="optt" value="80">80</option>
                          <option className="optt" value="81">81</option>
                          <option className="optt" value="82">82</option>
                          <option className="optt" value="83">83</option>
                          <option className="optt" value="84">84</option>
                          <option className="optt" value="85">85</option>
                          <option className="optt" value="86">86</option>
                          <option className="optt" value="87">87</option>
                          <option className="optt" value="88">88</option>
                          <option className="optt" value="89">89</option>
                          <option className="optt" value="90">90</option>
                          <option className="optt" value="91">91</option>
                          <option className="optt" value="92">92</option>
                          <option className="optt" value="93">93</option>
                          <option className="optt" value="94">94</option>
                          <option className="optt" value="95">95</option>
                          <option className="optt" value="96">96</option>
                          <option className="optt" value="97">97</option>
                          <option className="optt" value="98">98</option>
                          <option className="optt" value="99">99</option>
                          <option className="optt" value="100">100</option>
                        </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                      City
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                    <input type="text" className="field" name="city" id="city" required />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                      Country
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" className="field" name="country" id="country" required />
                  </Col>
                </Row>
              </Col>
              <h3 className="dtype">Contact details</h3>
              <br />
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6}>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                      Phone Number
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" className="field" name="country" id="country" required />
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6}>
                <Row>
                  <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                      Email address
                  </Col>
                  <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                  <input type="text" className="field" name="country" id="country" required />
                  </Col>
                </Row>
              </Col>
              <h3 className="dtype">Educational details</h3>
              <br />
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6} style={{textAlign:"left"}}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            Currently pursuing education</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntedu" id="crntedu" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            Current standard/year</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntstdyr" id="crntstdyr" required />
                        </Col>
                    </Row>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6} style={{textAlign:"left"}}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                        Name of institution (current)  </Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntedu" id="crntedu" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                        Passout or Graduation year</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntstdyr" id="crntstdyr" required />
                        </Col>
                    </Row>
              </Col>
         
             

              <br />
              <h3 className="dtype">Professional details</h3>
              <br></br>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6} style={{textAlign:"left"}}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            Profession</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntedu" id="crntedu" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            Currently working at</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntstdyr" id="crntstdyr" required />
                        </Col>
                    </Row>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6} style={{textAlign:"left"}}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            work experience</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntedu" id="crntedu" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            Numbre of students mentored</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntstdyr" id="crntstdyr" required />
                        </Col>
                    </Row>
              </Col>
              <h3 className="dtype">About you</h3>
              <br></br>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6} style={{textAlign:"left"}}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            Interests</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntedu" id="crntedu" required />
                        </Col>
                    </Row>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6} style={{textAlign:"left"}}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                            Certifications</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                            <input type="text" className="field" name="crntstdyr" id="crntstdyr" required />
                        </Col>
                    </Row>
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}  xxl={6} style={{textAlign:"left"}}>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="fname">
                        Tell us something about yourself</Col>
                        <Col sm={8} md={8} lg={8} xl={8} xxl={8} className="fname">
                        <textarea style={{textAlign: "left"}} className="field bio" name="bio" id="bio" required> </textarea>
                        </Col>
                    </Row>
              </Col>
               
              <div>
                    <br />
                    <input className="submit" type="submit" title="submit" value="Submit" />
              </div>
            

           </Row>
          </div>
          </div>
      
        </Form>

   
    
    
    </>
  )
}