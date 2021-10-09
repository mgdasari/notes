let songList = [1,8,6,3,8]
let playedSong=new Set;
function play(song){
    return new Promise ((resolve,reject)=>{
        if(!playedSong.has(song)){
            playedSong.add(song)
            resolve (song)
        }
        else reject (-1)
    })
}

songList.forEach((item)=>{
    play(item).then((xyz)=>{
        console.log(xyz)}).catch((e)=>{
        console.log( 'Already played song' + e +item)
    })
})


