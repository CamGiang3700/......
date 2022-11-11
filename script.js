async function getList() {
    const list_poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
    return list_poke.json()
}

async function getPoke(url) {
    const poke = await fetch(url)
    return poke.json()

}


async function main() {
    list_poke = await getList()

    for (var i = 0; i <= 49; i++) {

        poke = await getPoke(list_poke.results[i].url)

        name_poke = list_poke.results[i].name;

        id_poke = poke.id
        
        img = poke.sprites.other.dream_world.front_default
        type_poke = poke.types.map(
            function(types) {
                return types.type.name
            }
        )
        
        hp_poke = poke.stats[0].base_stat,
        at_poke =poke.stats[1].base_stat,
        de_poke =poke.stats[2].base_stat,
        sa_poke =poke.stats[3].base_stat


        const pokemon = `
        <div class="card" id="card"  onclick="openBtn(' ${id_poke}. ${name_poke}, ${type_poke} <br> Hp: ${hp_poke}, At: ${at_poke}, De: ${de_poke} ')">
            <img  src="${img}" style="height:300px; width:300px">
            

        </div>'`
            document.getElementsByClassName("list_pokemon")[0].innerHTML += pokemon;

    }


}
main()


const openBtn = (abc) => {
    
template = `
<div class="modal-box"  >
    <div class="content" id="pokem" >
    ${abc}
    </div>
    <div class="next-page" >
            <button onclick="nextPage()">Next</button>
    </div>
</div>
`

document.body.innerHTML += template;
}
var i = 0
function nextPage() {
    
  //  document.getElementById("pokem").innerHTML = list_poke[i];
    console.log(list_poke.results[i])
    i += 1;

}







