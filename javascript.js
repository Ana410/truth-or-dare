var truths = [`Who is your crush?<br>`,`Have you ever been walked in on in the bathroom? <br>`, `Do you pick your nose? <br>`, `Have you ever peed yourself? <br>`, `Have you ever sleepwalked? <br>`, `Do you eat stuff off of the floor? <br>`, `What is the most illegal thing you've ever done? <br>`]
var truthButton = $('.truthButton');
truthButton.on('click', truthPicker);
function truthPicker() {
  var randomTruth = Math.random();
  var newTruth = randomTruth * truths.length;
  var rounded = Math.floor(newTruth);
  var randomTruth = truths[rounded];
  var truthSection = $('.truthSection');
  truthSection.append(randomTruth)
}

var dares = [`Eat a piece of paper <br>`, `Talk to a pillow like its your crush <br>`, `Take a shot of pickle juice <br>`, `Lick the bottom of your shoe <br>`, `Get into a debate with the wall <br>`]
var dareButton = $('.dareButton');
dareButton.on('click', darePicker);
function darePicker() {
  var randomDare = Math.random();
  var newDare = randomDare * dares.length;
  var rounded = Math.floor(newDare);
  var randomDare = dares[rounded];
  var dareSection = $('.dareSection');
  dareSection.append(randomDare);
}
var submit = $('.submit');
submit.on('click', submitComment);
function submitComment(){
  var input = $('.commentsBox').val();
  var comments = $('.comments');
  comments.append(`
    <div class="commentContainer">
      <p class="userInput">${input}</p>
    </div>
  `);
}
