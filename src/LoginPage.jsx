

function LoginPage(){
    
    const clear = function(){
        const username = document.getElementById("username");
        const password = document.getElementById("password");

        if (username && password) {
            username.value = '';
            password.value = '';
        }
    }
    const login = function(){
        const username = document.getElementById("username");
        const password = document.getElementById("password");

        if (username && password) {
            if (username.value === 'Admin' && password.value === '1234') {
                window.location.href = 'Home.html';
            } else {
                alert('Invalid username or password');
            }
        }
    }
    return(
        <div id="mainblock">
            <div className="box" id="login">
                <h1>Login</h1><br />
                <div className="details">
                    <input type="text" placeholder="username" id="username"/>
                    <i class='bx bx-user'></i>
                </div>
    
                <div className="details">
                    <input type="password" placeholder="Password" id="password"/>
                    <i class='bx bx-lock-alt'></i>
                </div>
                
                <div className="log">
                    <button className ="Abuttons" type="submit" onClick={login}>Login</button>
                    <button className ="Abuttons" type="reset" onClick={clear}>Clear</button>
                </div>
               
                <div className="checkBox">
                    <label htmlFor="Remember"><input type="checkbox" id="Remember"/>Remember me</label>
                    <a href="">Forgot password?</a>
                </div>
                
            </div>
            <div className="box" id="signin">
                <h1>Sign in</h1>
                <div className="details">
                    <input type="text" placeholder="username"/>
                    <i class='bx bx-user'></i>
                </div>

                <div className="details">
                    <input type="password" placeholder="Enter your password"/>
                    <i class='bx bx-lock-alt'></i>
                </div>
                
                <div className="details">
                    <input type="password" placeholder="Re enter your password"/>
                    <i class='bx bx-lock-alt'></i>
                </div>
                
                <div className="log">
                    <button className ="Abuttons" type="submit">Sign in</button>
                    <button className ="Abuttons" type="reset">Clear</button>
                </div>
                <div className="con">
                    <div className="Btn">
                        <button className ="buttons" type="submit">Login from google</button>
                        <i class='bx bxl-google'></i>
                    </div>
                    <div className="Btn">
                        <button className ="buttons" type="submit">Login from facebook</button>
                        <i class='bx bxl-facebook-circle' ></i>
                    </div>
                    <div className="Btn">
                        <button className ="buttons" type="submit">Login from linkedin</button>
                        <i class='bx bxl-linkedin-square' ></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LoginPage