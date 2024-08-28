let textBoxQuestion = document.getElementById("textBoxQuestion");
let textBox = document.getElementById("textBox");
let step = 0;

textBox.addEventListener("click", function(event)
{
  textBoxQuestion.textContent = "Enter your name...";
  textBox.placeholder = "Enter name..."
  step = 0;
});

textBox.addEventListener("keydown", function(event)
{
  if (event.keyCode === 13)
  {
    let enteredText = textBox.value;
    textBox.value = "";

    if (step === 0)
    {
      textBoxQuestion.textContent = "Hello " + enteredText + "!";
      textBox.placeholder = "Press enter to continue...";
      step++;
    }
    else if (step === 1)
    {
      textBoxQuestion.textContent = "Would you like to learn more about SIP, or possibly the first logic gate?";
      textBox.placeholder = "Type SIP or Logic Gate to continue...";
      step++;
    }
    else if (step === 2)
    {
      if (enteredText.toLowerCase() === "sip")
      {
        textBoxQuestion.textContent = "SIP, invented by Mark Handley and Henning Schulzrinne, is a signaling protocol developed in the 1990s by the IETF. Its first RFC, RFC 2543, was published in 1999. SIP became a widely adopted standard for initiating and controlling multimedia sessions over IP networks, playing a key role in the advancement of VoIP and unified communications technologies.";
        textBox.placeholder = "click on the prompt to restart...";
      }
      else if (enteredText.toLowerCase() === "logic gate" || enteredText.toLowerCase() === "logic")
      {
        textBoxQuestion.textContent = "Claude Shannon, an American mathematician and electrical engineer, revolutionized the field of digital logic with his invention of the logic gate. His groundbreaking work in the late 1930s laid the foundation for modern digital circuits and computer technology. Shannon's contributions earned him the title \"Father of Information Theory\" and solidified his status as a key figure in computing history.";
        textBox.placeholder = "click on the prompt to restart...";
      }
      else
      {
        textBoxQuestion.textContent = "Invalid Selection";
        textBox.placeholder = "click on the prompt to restart...";
      }
    step = 0;
    }

  }
});
