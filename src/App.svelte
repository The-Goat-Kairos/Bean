<svelte:head>
  <title>Bean World!</title>
</svelte:head>

<script>
  import Tabs from "./lib/Tabs.svelte";
  import Card from "./lib/Card.svelte";

  let sharedData;
  function shareData(data){
    let screenwidth = window.innerWidth;
    for (let i = 0; i < 100; i++){
      createBean(Math.floor(Math.random() * screenwidth))
    }
    sharedData = data;
  }
  
  function createBean(x){
    let foreground = document.getElementById("beanforeground")
    let bean = document.createElement('img')
    bean.src = "/bean.png"
    bean.classList.add("bean")
    bean.style.position = "absolute";
    bean.style.left = `${x}px`;
    bean.style.top = `${Math.floor(Math.random() * (-20 - 5 + 1) - 5)}px`;
    foreground.appendChild(bean)

    go_down(0)
  }

  function go_down(turn){
    let beans = document.getElementsByClassName("bean")
    for (let bean of beans){
      console.log(`${bean} + ${typeof bean}`)
    }
    if (turn < 10){
      console.log(turn)
      setTimeout(() => {go_down(turn)}, 10)
    }
  }


</script>

<main>
  <div id="beanforeground">
  </div>

  <Card activeTab={sharedData}/>

  <Tabs on:dataChange={(e) => shareData(e.detail)}/>
</main>

<style>
  #beanforeground {
    width: 0;
    height: 0;
    position: absolute;
    z-index: 10010;
    top: 0;
    left: 0;
  }
</style>
