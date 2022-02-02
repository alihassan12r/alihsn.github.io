const thePlaceholderEle = document.querySelector('.placeholder');
const theCloseCls = 'placeholder--close';

export const closePlaceholder = () => {
  return new Promise((resolve) => {
    thePlaceholderEle.classList.add(theCloseCls);
    setTimeout(resolve, 2000);
  });
};

export const removePlaceholder = () => {
  thePlaceholderEle.remove();
};
