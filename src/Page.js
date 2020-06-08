import React from 'react';
import './Hello.css'

function Page(){
    
return <form className="myname" action="http://www.example.com/login.php" method="POST">
        <fieldset>
        <legend className="legendcolor"><font size = "4.5">Student Registration Form</font></legend>
        <font color="white">
        <p>
                First Name: &nbsp;
                <input type="text" name="firstname" size="15" maxlength="30" required/>
                &nbsp; Last Name: &nbsp;
                <input type="text" name="lastname" size="15" maxlength="30" required/>
        </p>
        <p>
                Gender: &nbsp;
                <input id="male" type="radio" name="gender" value="M"/> 
                <label for="male">Male</label>
                <label><input type="radio" name="gender" value="F"/> Female </label>
    
            </p>
            <p>
                Date of Birth: &nbsp;
                <input type="date" name="DOB"/>
            </p>
            <p>
                Please enter your Residential address: &nbsp;
                <input type="text" name="address"required/>
            </p>
            <p>
                Please enter your Zipcode: &nbsp;
                <input type="number"  name="zipcode"required/>
            </p>
            <p>
                Nationality: &nbsp;
                <select name="countries">
                    <option>select..</option>
                    <option value = "Pakistan">Pakistan</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="England">England</option>
                    <option value="China">China</option>
                    <option value="NewZealand">NewZealand</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>        
                </select>    
            </p>
            <p>
                City: &nbsp;
                <select name="City">
                    <option>select..</option>
                    <option value = "Quetta">Quetta</option>
                    <option value="Khuzdar">Khuzdar</option>
                    <option value="Chaman ">Chaman </option>
                    <option value="Turbat">Turbat</option>
                    <option value="Sibi">Sibi</option>
                    <option value="Lasbela">Lasbela</option>
                    <option value="Gwadar">Gwadar</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Mardan">Mardan</option>
                    <option value="Kohat ">Kohat</option>
                    <option value="Abbottabad">Abbottabad</option>
                    <option value="	Dera Ismail Khan">	Dera Ismail Khan</option>      
                    <option value="Charsadda">Charsadda</option>      
                    <option value="Nowshera">Nowshera</option>      
                    <option value="Lahore">Lahore</option>      
                    <option value="Sialkot">Sialkot</option>      
                    <option value="Karachi">Karachi</option>      
                    <option value="Hyderabad">Hyderabad</option>      
                    <option value="Sukkur">Sukkur</option>  
                    <option value="Larkana">Larkana</option>                    
                    <option value="Nawabshah">Nawabshah</option>                    
                    <option value="Khairpur">Khairpur</option>       
                    <option value="Other">Other</option>                    

                </select>    
            </p>
            <p>
                Course: &nbsp;
                <select name="countries"required>
                    <option>select..</option>
                    <option value = "AIC">Artificial Intelligence</option>
                    <option value="IOT">Internet Of Things</option>
                    <option value="CNC">Cloud Native Computing</option>
                    <option value="BCC">Block Chain Computing</option>
                </select>    
            </p>
            </font>
        </fieldset>
        <br/>
        <fieldset >
            <legend className="legendcolor"> <font size = "4.5">Site Registration </font></legend>
            <font color="white">
        <p>
            Username: &nbsp;
            <input type="text" name="username" size="15" maxlength="10" required/>
        </p>
        <p>
            Password: &nbsp;
            <input type="password" name="Password" size="15" maxlength="30"required/>
        </p>
       
        <p>
            Re-enter password: &nbsp;
            <input type="password" name="Password" size="15" maxlength="30"required/>
        </p>
       
        <p>
                Email address: &nbsp;
                <input type="email" name="email"required/>
        </p>
        <p>
                Re-enter email address: &nbsp;
                <input type="email" name="email"required/>
        </p>

        <p>
            Comment:&nbsp;<br/>
            <textarea name="Comment" cols="30" rows="3">Any Comment</textarea>

        </p>
        <p>
            Upload profile picture:
        </p>
        <input type="file" name="dp"/>

        <br/>
        <br/>
        <input type="submit" value="Upload"/>
    <input type="submit"/>
    </font>
    </fieldset>
</form>
}

export default Page;