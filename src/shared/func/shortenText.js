const shortenText = (text, amount) => {
  if (text.length > amount) {
    return text.split(' ').slice(0, amount).join(' ');
  }

  return text;
};

export default shortenText;
