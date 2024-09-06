<script>
    var screensize = window.innerWidth;
    var logowidth = `${screensize / 20}px`

    window.addEventListener("resize", () => {
        screensize = window.innerWidth;
        logowidth = `${screensize / 20}px`
    })
</script>

<h1 class="title">
    Welcome to bean land!
</h1>


<p class="paragraph" style="display: flex; justify-content: center; align-items: center; text-align: center">
    Hello! I do not know what the fuck I should say here just tell me and I'll change it.
</p>

<div class="image-preview">
    <p id="artpreviewtext">Art Preview!</p>
    <div id="images">
        <img width="100px" src="https://images.unsplash.com/photo-1693661925821-bc241be1cf69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" alt="img">
        <img width="100px" src="https://images.unsplash.com/photo-1693643449342-9effd3c4ba32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="img">
        <img width="100px" src="https://images.unsplash.com/photo-1693611148786-a63147c1f38c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="img">
    </div>
</div>

<div class="socials">
    <a title="X??" id="twitter"><img height={logowidth} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553" alt="Logo"></a>
    <a title="My youtube!" id="youtube"><img height={logowidth} src="https://www.svgrepo.com/show/13671/youtube.svg" alt="Logo"></a>
    <a title="STREAMSSS" id="twitch"><img height={logowidth} src="https://www.svgrepo.com/show/448251/twitch.svg" alt="Logo"></a>
    <a title="Come hang out with me!" id="discord"><img height={logowidth} src="https://www.svgrepo.com/show/353655/discord-icon.svg" alt="Logo"></a>
</div>

<style>
    h1 {
        color: black;
        margin: 0;
        margin-top: 7.5%;
    }
    .image-preview > #images > img {
        width: 100px;
        margin: 0 0.5em 0.5em 0.5em;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
    .socials {
        margin-top: 10%;
    }
    .socials > a {
        width: 100%;
        height: 100%;
    }
    .image-preview {
        margin: 0;
        margin-top: 1em;
        display: flex;
        align-items: center;
        gap: 0.05em;
        flex-direction: column;
    }
    #artpreviewtext{
        font-size: 0.66em;
        font-style: normal;
        margin: 0;
    }
    a:hover {
        cursor: pointer;
    }

    .paragraph {
        margin: 0.5em;
        margin-top: 0;
        margin-bottom: 5%;
    }
</style>