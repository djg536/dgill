export function scrollToViewElement(element) {
    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
