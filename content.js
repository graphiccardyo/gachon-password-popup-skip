(() => {
  const POPUP_SELECTOR = "#exPassword.modalPassword";
  const FORM_SELECTOR = "#login2Frm";
  const BUTTON_SELECTOR = "a.btnNo, #btnNo a";
  const REQUIRED_TEXT = ["90일 이상", "비밀번호", "변경"];
  const CLICKED_MARK = "gachonAutoClicked";

  const isVisible = (element) => {
    if (!element) return false;

    const style = window.getComputedStyle(element);
    const rect = element.getBoundingClientRect();

    return (
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      style.opacity !== "0" &&
      rect.width > 0 &&
      rect.height > 0
    );
  };

  const isPasswordReminder = (popup) => {
    const text = popup.textContent || "";
    return REQUIRED_TEXT.every((part) => text.includes(part));
  };

  const findChangeLaterButton = (popup) => {
    const button = popup.querySelector(BUTTON_SELECTOR);
    if (button) return button;

    return [...popup.querySelectorAll("a, button, input[type='button'], input[type='submit']")]
      .find((candidate) => {
        const text = candidate.value || candidate.textContent || "";
        return text.trim().includes("다음에 변경");
      });
  };

  const clickChangeLater = () => {
    const popup = document.querySelector(POPUP_SELECTOR);

    if (
      !popup ||
      popup.dataset[CLICKED_MARK] === "true" ||
      !isVisible(popup) ||
      !isPasswordReminder(popup)
    ) {
      return false;
    }

    const form = popup.querySelector(FORM_SELECTOR);
    const button = findChangeLaterButton(popup);

    if (!form || !button || !isVisible(button)) {
      return false;
    }

    popup.dataset[CLICKED_MARK] = "true";
    button.click();

    setTimeout(() => {
      if (document.contains(popup) && isVisible(popup)) {
        form.submit();
      }
    }, 300);

    return true;
  };

  const scheduleClick = () => {
    window.setTimeout(clickChangeLater, 100);
  };

  scheduleClick();

  const observer = new MutationObserver(scheduleClick);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style"]
  });
})();
