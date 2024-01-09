-Setup
-Project Structure
-basic variable
-Style internal and external
-Render data
-configure rout
-basic variable

> npm install react-router-dom@6
> -import {BrowserRoutm Routes, Rout} from react-rout-dom
> import HomeScreen from "./screen/home/HomeScreen";
> create page
> create folder screen
> +home -> HomeScreen.js
> +home -> About.js
> +teacher -> Teacher.js
> +eorr -> ErrorPage.js
> +auth -> AuthScreen.js
> +student - > Student.js

+configur riout not found

    - <Route path="\*" element={<RoutNotfounnd />} />

<BrowserRouter>

    <Routes>

        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/student" element={<StudentScreen />} />
        {/_ if user put the wrong path will show the error function _/}
        <Route path="\*" element={<RoutNotfounnd />} />

    </Routes>

</BrowserRouter>
# ReactJs
