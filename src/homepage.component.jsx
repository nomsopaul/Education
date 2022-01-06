import React from 'react';
import two from './images/edu1.jpg';
import one from './images/one.jpg';
import logo_one from './images/logo_one.svg';
import logo_four from './images/logo_four.svg';
import dashboard from './images/Dashboard-removebg.png';
import { useState } from 'react';
import axios from 'axios';
import {db} from "../src/firebase";

const HomePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [institute_name, setInstitute_name] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

   const handleSubmit = (e) => {
     e.preventDefault();
     db.collection('users').add({
      name:name,
       email:email,
  institute_name:institute_name,
      phone:phone,
        country:country,
     })
     .then(()=> {
       alert("your responses has been sent ")
     })
     .catch((error) => {
       alert(error.message);
     });
     setName("");
     setEmail("")
    setInstitute_name("")
  setPhone("")
setCountry("")
   };
  
  // const [input, setInput] = useState ({
  //    name: "",
  //    email: "",
  //    institute_name: "",
  //    phone: "",
  //    country: "",
  // })
  // function handleChange(event) {
  //   const { name, value } = event.target;
                                         
  //   setInput(prevInput => {
  //     return {
  //       ...prevInput,
  //       [name] : value
  //     }
  //   })
  // }
  // function handleClick (event) {
  //   event.preventDefault();

  //   const newUser = {
  //     name: input.name,
  //     email: input.email,
  //     institute_name: input.institute_name,
  //     phone: input.phone,
  //     country: input.country,
  //   }
  //   axios.post('http://localhost:8080', newUser);

  //   console.log(input);
  // }


  // const [requestDemoData, setRequestDemoData] = useState({
  //   name: "",
  //   email: "",
  //   institute_name: "",
  //   phone: "",
  //   country: "",
  // })
  // const { name, email, institute_name, phone, country } = requestDemoData


  // const sendRequestDemo = async (event) => {
  //   let formData = { name, email, institute_name, phone, country }
  //   event.preventDefault();



  //   const requestOptions = {
  //     method: "POST",

  //     body: formData
  //   }
  //   try {
  //     fetch("#", requestOptions)
  //       .then(function (response) {
  //         console.log("response")

  //       })
  //       .then(function (data) {


  //       }).catch((error) => {
  //         console.log("gbfg")

  //       });
  //   } catch (error) {
  //     console.log("gfhgt")

  //   }

  // }

  // const handleChange = async (event) => {
  //   event.preventDefault();
  //   let { value, name } = event.target
  //   setRequestDemoData({ ...requestDemoData, [name]: value })

  // }
 

  


  return (

    <div className='homepage'>
      <React.Fragment>
        <div className='header'>
          <nav class="navbar navbar-expand-lg navbar-light bg-light navbar_head">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo_one} alt="" className="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <body className="body">
          <div className="row sub_container_row_one">
            {/* <img src={one} alt="" className="bg_img_one" /> */}
            <div className="row sub_sub_container_row_one">
              <div className="col-md-6">
                <h2 className="row_one_title">All-in-One Mobility Driven ERP Platform</h2>
                <div className="row_one_subtitle">Eazzy Education Management software helps
                  educational organizations go digital and brings all stakeholders to a single platform.</div>
                <button type="submit" href="#seeRequestDemo" className="btn btn-primary row_four_demo_request_btn mt-3">Request Demo</button>
              </div>
              <div className="col-md-6">
                <img src={dashboard} alt="" className="row_one_img" />
              </div>
            </div>
          </div>


          <div className="row sub_container_row_two">
            <h1 className="row_two_title">A System With Smart Hardware Integrations</h1>
            <div className="row_two_subtitle">Eazzy Education Management offers modules to help you operate in the most efficient and organized way.</div>
          </div>
          <div className="row sub_sub_container_row_two">
            <div className="col-md-4">
              <div className="badge-ribbon"><i class="fas fa-hotel fa-2x feature_icon"></i></div>
              <div className="feature">
                <div className="feature_text">Back Office and Accounts</div>
              </div>
              <ul className="checklist">
                <li><i class="far fa-check-square"></i> Manage Office</li>
                <li><i class="far fa-check-square"></i> Message Board </li>
                <li><i class="far fa-check-square"></i> Manage Accounts (Fees & Expenditure) </li>
                <li><i class="far fa-check-square"></i> Manage Library </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="badge-ribbon"><i class="fas fa-pen-square fa-2x feature_icon"></i></div>
              <div className="feature">
                <div className="feature_text">Exams (Offline / Online)</div>
              </div>
              <ul className="checklist">
                <li><i class="far fa-check-square"></i> Manage Offline Exams</li>
                <li><i class="far fa-check-square"></i> Manage Online Exams </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="badge-ribbon"><i class="fas fa-bus fa-2x feature_icon"></i></div>
              <div className="feature">
                <div className="feature_text">Dormitories & Transport</div>
              </div>
              <ul className="checklist">
                <li><i class="far fa-check-square"></i> Manage Dormitories</li>
                <li><i class="far fa-check-square"></i> Manage Transport </li>
              </ul>
            </div>
          </div>
          <div className="row sub_sub_container_row_two">
            <div className="col-md-4">
              <div className="badge-ribbon"><i class="fas fa-book fa-2x feature_icon"></i></div>
              <div className="feature">
                <div className="feature_text">Academic Management</div>
              </div>
              <ul className="checklist">
                <li><i class="far fa-check-square"></i> Manage Office</li>
                <li><i class="far fa-check-square"></i> Message Board </li>
                <li><i class="far fa-check-square"></i> Manage Accounts (Fees & Expenditure) </li>
                <li><i class="far fa-check-square"></i> Manage Library </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="badge-ribbon"><i class="fas fa-cog fa-2x feature_icon"></i></div>
              <div className="feature">
                <div className="feature_text">Settings Management</div>
              </div>
              <ul className="checklist">
                <li><i class="far fa-check-square"></i> Manage Office</li>
                <li><i class="far fa-check-square"></i> Message Board </li>
                <li><i class="far fa-check-square"></i> Manage Accounts (Fees & Expenditure) </li>
                <li><i class="far fa-check-square"></i> Manage Library </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="badge-ribbon"><i class="fas fa-gift fa-2x feature_icon"></i></div>
              <div className="feature">
                <div className="feature_text">Awesome Features</div>
              </div>
              <ul className="checklist">
                <li><i class="far fa-check-square"></i> Online Exam</li>
                <li><i class="far fa-check-square"></i> Payment Gateway </li>
                <li><i class="far fa-check-square"></i> Records of Teaching Modules </li>
                <li><i class="far fa-check-square"></i> Parental Control</li>
              </ul>
            </div>
          </div>

          <div className="row sub_container_row_three">
            <div className="subscription_package">Subscription Packages</div>
            <div className="row sub_sub_container_row_three">
              <div className="col-md-6 row-three-col">
                <div className="sub_package_design">
                  {/* <div className="card_header"></div> */}
                  <div className="card-body package_div">
                    <h5 className="card-title">Basic</h5>
                    <div className="card-subtitle">Essential Features</div>
                    <div className="main-price">₦500,000</div>
                    <div className="discount-price">₦400,000</div>
                    <div className="payment-term">/year</div>
                    <div className="payment-term">Billed Yearly</div>
                    <ul className="card-feature-list">
                      <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Academic Management</li>
                      <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>User Management</li>
                      <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Guardian Control Management</li>
                      <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Admin Management</li>
                    </ul>
                    <a href="#" className="btn btn-primary subscription_btn">Choose Basic</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 row-three-col ">
                <div className="sub_package_design_two">
                  <div className="card-body package_div_two col-two">
                    <div className="card_header">RECOMMENDED BY EXPERTS</div>
                    <div className="main-card-body">
                      <h5 className="card-title">Pro</h5>
                      <div className="card-subtitle">Advanced Features</div>
                      <div className="main-price">₦1,500,000</div>
                      <div className="discount-price">₦1,200,000</div>
                      <div className="payment-term">/year</div>
                      <div className="payment-term">Billed Yearly</div>
                      <ul className="card-feature-list">
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Academic Management</li>
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>User Management</li>
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Guardian Control Management</li>
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Admin Management</li>
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Accounts Management</li>
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Library Management</li>
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Dormitories Management</li>
                        <li className="card-feature-sublist"><i class="fas fa-check-circle"></i>Transportation Management</li>
                      </ul>
                      <a href="#" className="btn btn-primary subscription_btn">Choose Pro</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row sub_container_row_four">
            <img src={two} alt="" className="row_four_bg_img" />
            <div className="sub_sub_container_row_four">
              <h1 className="row_four_title">Create Your Digital Academy</h1>
              <h6 className="row_four_subtitle">Build your e-learning platform in just a few minutes with pocket study and
                let this unique product line help you operate with better productivity.</h6>
              <button type="submit" className="btn btn-primary row_four_demo_request_btn mt-3">Request Demo</button>
            </div>
          </div>

          <div className="row sub_container_row_five" >
            <div className="row_five_form">
              <form  id="seeRequestDemo" onSubmit={handleSubmit}>
                <h5 className="request_title">Demo Request Form</h5>
                <div className="mb-2">
                  <label for="exampleName" className="form-label">Name*</label>
                  <input type="text" name="name" className="form-control" value={name} id="exampleInputName" onChange={(e) => setName(e.target.value)} aria-describedby="nameHelp" required />
                </div>
                <div className="mb-2">
                  <label for="exampleInputEmail1" className="form-label">Email address*</label>
                  <input type="email" name="email" className="form-control" value={email} id="exampleInputEmail1" onChange={(e) => setEmail (e.target.value)} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-2">
                  <label for="exampleInstituteName" className="form-label"> Institute Name*</label>
                  <input type="text" className="form-control" name="institute_name" value={institute_name} id="exampleInputInstituteName" onChange={(e) => setInstitute_name(e.target.value)} aria-describedby="institutenameHelp" required />
                </div>
                <div className="mb-2">
                  <label for="exampleNunber" className="form-label">Phone Number*</label>
                  <input type="number" name="phone" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} id="exampleInputPhoneNo" aria-describedby="numberHelp" required />
                </div>
                <div className="mb-2">
                  <label for="exampleCountry" class="form-label">Country*</label>
                  <select id="countryName" name="country" value={country} onChange={(e) => setCountry(e.target.value)} class="form-select form-control country_select" required>
                    <option>--select country--</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Aland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, Democratic Republic of the Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and Mcdonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libyan Arab Jamahiriya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthelemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="CS">Serbia and Montenegro</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.s.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary demo_request_btn mt-3">Request Demo</button>
              </form>
            </div>
          </div>


          <div className="row footer_row">
            <div className="col-md-12 index_footer_col">
              <div className="row footer_row_sub">
                <div className="col-md-3 footer-sub-col">
                  <div className="footer_menu">Headquarters</div>
                  <h6 className="footer_menu_text">Eazzy Education, 1st Floor, <br />Aliu Animashaun Street,Lekki 1, <br />Lagos, Nigeria</h6>
                </div>
                <div className="col-md-3 footer-sub-col"><div className="footer_menu">Contact</div>
                  <div className="footer_menu_text">support@eazzyeducation.com</div>
                  <div className="footer_icon_row">
                    {/* <div><i href="" className="fab fa-facebook-f"></i>eazzy_education</div> */}
                    {/* <div><i href="" className="fab fa-twitter"></i>@eazzy_education</div> */}
                    <div><i href="" className="fab fa-instagram"></i>@eazzy_education</div>
                  </div>
                </div>
                <div className="col-md-3 footer-sub-col"><div className="footer_menu">Legal Policy</div>
                  <a href="" className="privacy_policy">Privacy Policy</a>
                </div>
                <div className="col-md-3 footer-sub-col">
                  <img src={logo_four} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="index_copyright_row">
            <small className="index_copyright">
              Copyright &copy; 2021, <a href="" className="footer_tag"> Eazzy Education</a>. All rights reserved
            </small>
          </div>
        </body>
      </React.Fragment>
    </div>
  )
};

export default HomePage;