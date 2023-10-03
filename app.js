const Button = document.getElementById('searchbutton')
const Uiid = document.getElementById('search')

async function apiget(api) {
 const response = await fetch(api)
 const data = await response.json();
 const createdate = data.created_at
 const datetime = createdate.replace('T','  ')
 document.getElementById('pfp').src = data.avatar_url
 document.getElementById("nameu").textContent = data.name;
 document.getElementById("desc").textContent = data.bio;
 document.getElementById("create").textContent = `account created on : ${datetime}`;
 document.getElementById("uname").textContent = `@${data.login}`;
}

const Search = () => {
         username = Uiid.value;
         console.log(username)
         if (username > ''){
            apiget(`https://api.github.com/users/${username}`)
            document.getElementById("stat").src = `https://github-readme-stats.vercel.app/api?username=${username}&theme=react&show_icons=true&hide_border=true&count_private=true`;
            document.getElementById("streak").src = `https://streak-stats.demolab.com?user=${username}&theme=react&show_icons=true&hide_border=true&count_private=true`;
            document.getElementById("languse").src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=react&show_icons=true&hide_border=true&layout=compact`;
            document.getElementById("name").textContent = `Stats for ${username}`
         }
        else{
            document.getElementById("name").textContent = 'Type A Username ex : simplystudios'
        }
}
Button.addEventListener("click",Search())
search.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        Search()
        // Perform desired actions here
      }
    });
