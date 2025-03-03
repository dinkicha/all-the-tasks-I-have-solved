import { html } from "./lib.js";
import { getAllMemes } from "./api/meme.js";

let homeTemplate = () => html`
<section id="welcome">
<div id="welcome-container">
    <h1>Welcome To Meme Lounge</h1>
    <img src="/images/welcome-meme.jpg" alt="meme">
    <h2>Login to see our memes right away!</h2>
    <div id="button-div">
        <a href="/login" class="button">Login</a>
        <a href="/register" class="button">Register</a>
    </div>
</div>
</section>
`;

export async function showHome(ctx) {
  ctx.render(homeTemplate());
}
