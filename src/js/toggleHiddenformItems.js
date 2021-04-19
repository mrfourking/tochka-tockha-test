const toggleHiddenItems = () => {
  const visibilityToggles = document.querySelectorAll('.js-visibility-toggle');

  if (!visibilityToggles.length) return;

  /**
   * Переключение скрытых блоков, находящихся в общем с чекбоксом родителе
   * @param {HTMLElement} checkbox - DOM элемент чекбокса
   */
  const toggleVisibility = (checkbox) => {
    const blocks = checkbox.closest('.request-form__row').querySelectorAll('.js-hidden-block');

    blocks.forEach((block) => {
      block.classList.toggle('js-hidden');
    })
  };

  /**
   * Функция обработчика изменений состояния чекбокса
   * @param {HTMLElement} checkbox - DOM элемент чекбокса
   * @returns {function} - функция переключения скрытых блоков
   */
  const onInputToggleVisibility = (checkbox) => {
    return () => {
      toggleVisibility(checkbox);
    }
  };

  visibilityToggles.forEach((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]');

    toggleVisibility(checkbox);

    checkbox.addEventListener('change', onInputToggleVisibility(checkbox));
  })

}

export {toggleHiddenItems};
