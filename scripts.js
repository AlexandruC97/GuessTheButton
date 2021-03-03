function reply_click(clicked_id) {
    var x = Math.floor(Math.random() * 3);
    if (x == clicked_id) {
        alert("Well done, mate!");
    }else {
        alert("Neah!!! Try again!");
    }
}

