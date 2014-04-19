var  now_playing = 0;
var  panel_table = new Array(25);
var  click_after = new Array(25);
var  start_table = new Array(25);
var  title_panel = new Image();
var  over_panel = new Image();
var  button_on = new Image();
var  button_off = new Image();

function DisplayButton() {
  var i, c;

  c = 0;
  for(i=0; i<25; i++) {
    if (panel_table[i] != click_after[i]) {
      panel_table[i] = click_after[i];
      if (panel_table[i] == 0) {
        SetImage(i, button_off.src);
      }
      else {
        SetImage(i, button_on.src);
      }
    }
    if (panel_table[i] == 0) {
      c += 1;
    }
  }
  if (c == 25) {
    now_playing = 0;
    document.TITLE.src = over_panel.src;
  }
}

function SetImage(pos, img) {
  document.images[pos].src = img;
}


function ButtonClick(no) {

  if (now_playing == 1) {
    click_after[no] ^= 1;

    if (no > 4) {
      click_after[no-5] ^= 1;
    }

    if (no < 20) {
      click_after[no+5] ^= 1;
    }

    if ((no % 5) > 0)  {
      click_after[no-1] ^= 1;
    }

    if ((no % 5) < 4) {
      click_after[no+1] ^= 1;
    }

    DisplayButton();
  }
}


function InitQuestion() {
  var i, endflag, check1, check2;

  endflag = false;

  while(endflag == false) {

    for(i=0; i<25; i++) {
      start_table[i] = parseInt(Math.random() * 2);
    }

    check1 = start_table[1] +
             start_table[2] +
             start_table[3] +
             start_table[5] +
             start_table[7] +
             start_table[9] +
             start_table[10] +
             start_table[11] +
             start_table[13] +
             start_table[14] +
             start_table[15] +
             start_table[17] +
             start_table[19] +
             start_table[21] +
             start_table[22] +
             start_table[23];
    check1 &= 1;
    check2 = start_table[0] +
             start_table[2] +
             start_table[4] +
             start_table[5] +
             start_table[7] +
             start_table[9] +
             start_table[15] +
             start_table[17] +
             start_table[19] +
             start_table[20] +
             start_table[22] +
             start_table[24];
    check2 &= 1;
    if ((check1 == 0) && (check2 == 0)) {
      endflag = true;
    }
  }

  for(i=0; i<25; i++) {
    panel_table[i] = 2;
    click_after[i] = start_table[i];
  }
}

function OnRetry() {
  var i;

  for(i=0; i<25; i++) {
    panel_table[i] = 2;
    click_after[i] = start_table[i];
  }

  DisplayButton();

  now_playing = 1;
  document.TITLE.src = title_panel.src;
}

function OnRestart() {

  InitQuestion();

  DisplayButton();

  now_playing = 1;
  document.TITLE.src = title_panel.src;
}

button_on.src = "button1.gif";
button_off.src = "button0.gif";
title_panel.src = "panel1.gif";
over_panel.src = "panel2.gif";