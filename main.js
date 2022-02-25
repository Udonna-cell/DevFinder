let container = document.querySelector(".container");
let input = document.querySelector("#search");
let btn = document.querySelector("section.search button");
btn.addEventListener("click",()=>{
  github(input.value)
});

async function github(name) {
  // body...
  let response = await fetch(`https://api.github.com/users/${name}`);
  let data = await response.json();
  container.innerHTML = `<div class="info">
      <div>
        <img src="${data.avatar_url}" alt="profile">
      </div>
      <div>
        <h2>${data.name}</h2>
        <p><span>@${data.login}</span></p>
        <p>joined ${data.created_at.toLocaleString(undefined,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </div>
    <article>
      <p>${data.bio}</p>
      <aside>
        <div>
          <p>repos</p>
          <p>${data.public_repos}</p>
        </div>
        <div>
          <p>followers</p>
          <p>${data.followers}</p>
        </div>
        <div>
          <p>following</p>
          <p>${data.following}</p>
        </div>
      </aside>
      <div>
      <div>
      <i class="fa-solid fa-map-location-dot"></i>
      <p>${data.location}</p>
      </div>
      <div>
      <i class="fa-solid fa-link"></i>
      <p>${data.html_url}</p>
      </div>
      <div>
            <i class="fa-solid fa-building"></i>
            <p>${data.company}</p>
            </div>
      </div>
    </article>`;
}
