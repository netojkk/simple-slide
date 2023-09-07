//AQUI serão as imagens que eu irei utilizar, elas estão dentro de um array objeto.

const images = [
    {id: '1',img: 'img/picture1.jpg'},
    {id: '2', img: 'img/picture2.jpg'},
    {id: '3',img: 'img/picture3.jpg'},
    // {id: '4',img: 'https://lh3.googleusercontent.com/pw/AIL4fc9A-p4B4z1aYv61NS2hkBzuuBkG7h-b2a79lLWb6gZjq4ocYn60rHBcNKwJeEFPIMzx3vWYM9NLRLWejPkh89px7faxHZQjOkit19dGgLrAJppMPmMY1DAwWPnIbp8Q93usmkfIC6UMjOlXZ_pv1HfRtWlZTomP5Nopp1AjPAzT3thslor-BfzwA7p8MIRk3JRqFTRSYPUXdP590IPmnjt2JdvNsxEVaHR9AyCsZUpe_2A5VqHCdIon9eblI1M3Fvmu7uodI6Tp6FZitjdoumTMgD57ejm_-OBEqGcvV6fffscP5byXUPxcQ1YRzlPXvjidst9vwc_rcIDnXjB2qrADnlM491U1PszzyiHnLXzes2arcKeWXhAv6pBUUTb10xXqOr41WvGanopJ1JMKLB3ikhB0Kjfd9CxeAGunqsGaDtYTkyRSSqjc1w6_z0mrGQYgQz3gfLLLbpOP3z_qFed2PDzvr7AZdC3c7yG2grJEDxOqj_lC0GyRG6GH0IoD8sYJ-cPYnf3obeVMvWIcxqQZ3TT0MrnnGy_-MNyuaW3kMxV9clzWydHVpji4tx3pfOpHhXuFfL6sbDuYyu9WWTBPeWejefi6KNpQ5FFl7sd8AXRzxr-wOPtyEK1USrQuiN0gL_FjUl1S7Ro4TdmTkmcycDin3Xk_nIJzj8paczR7cFCwoGVLIzhtEMWPZkqdlY99eP_Cx9Sgs8NbM8TyX2TpHk1l8alXpB_4Acj4eIqNRjrTksIlvfpsOynA6JCQc2vj3pTg_L7Vf5kw_e0ofCrC0E683rhMTdj7x69expdzYvRSyQe55jdoO42BbnZJ6kBy9VPIIgmkMdPAHANF5Nmo5TTfMRxW1HhPOixVkSVHll9rq6N-9OB6YnqGDX0eSj7caOrPY8OFG1YV0kZnahgq2l3zIMGgE-TQ7Pu67RPsPeGZCI-koLHYap6pf2KLwYsHiZvU8WoLie4DfAPhF7Vm_VlxWLZJfaan8TX265s8Qa4IURgPcbDASbKLloRMiiiGveA=w521-h651-s-no?authuser=0'},
]

//ESSA aqui é a forma que eu estou utilizando para exibir as imagens de forma dinâmica.
const imageContainer = document.querySelector('.container-items')

//Aqui usando uma função que carrega 2 parametros, e logo em seguida, uso um dos parametros junto com o forEach, que faz uma varredura em todas as imagens, e o peço para fazer uma função em cada um dos elementos, no caso, em cada uma das imagens. Que é básicamente o seguinte: "Quero que em cada elemento dentro do array, você crie uma div e selecione tal imagem."
const loadImages = (images, imageContainer) => {
    images.forEach(image => {
        imageContainer.innerHTML += `
            <div class="item"> 
            <img src="${image.img}" alt="">
            </div>
        `
        
    });
}
//AQUI é a chamada para a função.
loadImages (images, imageContainer)

//FUNÇÃO de passar e retornar a imagem 

const next = document.querySelector('#arrow-next')
const previous = document.querySelector('#arrow-previous')

const nextImage = () => {
    imageContainer.appendChild(imageContainer.firstElementChild)
}
const previousImage = () => {
    imageContainer.insertBefore(imageContainer.lastElementChild, imageContainer.firstElementChild)
}
next.addEventListener('click', nextImage)
previous.addEventListener('click', previousImage)