const checkBtn = document.getElementById('check-btn');

var checkIfPalindrome = () => {
  const textInput = document.getElementById('text-input').value.trim();
  const result = document.getElementById('result');

  if (textInput === '') {
    alert('Please input a value.');
    return;
  }

  // Clean the input string by removing non-alphanumeric characters
  const cleanedStr = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');

  if (cleanedStr === reversedStr) {
    result.innerText = `${textInput} is a palindrome`;
  } else {
    result.innerText = `${textInput} is NOT a palindrome`;
  }
}

checkBtn.addEventListener('click', checkIfPalindrome);
