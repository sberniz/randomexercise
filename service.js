function random_choice(){
    let exercise_list = ["seat_ups.mp3","squat_thrust.mp3","v_steps.mp3","windmills.mp3","hip_swivel.mp3"]
    let path = "assets/"
    const random_choice = Math.floor(Math.random() * exercise_list.length);
    
    return path+exercise_list[random_choice]

}

function random_set_creator(start_hour,stop_hour,times_per_day)
{
    //Random Hour set in seconds
    let random_hour_set = new Set(); 
    var random_hour;
    let min = (Math.ceil(start_hour)) * 60 * 60;
    let max = (Math.floor(stop_hour)) * 60 * 60; 
    
    while(random_hour_set.size< times_per_day){
        random_hour = Math.floor(Math.random()* (max - min + 1) + min);
        random_hour_set.add(random_hour); 
    }
    return random_hour_set;

}
function play_audio(src_e,player){
    document.querySelector("#exercise_player > source").src = src_e;
    player.pause();
    player.load();
    player.play();

}

//Check if input is integer 
function isNumber(value) {
    var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
    return numberPattern.test(value);
  }