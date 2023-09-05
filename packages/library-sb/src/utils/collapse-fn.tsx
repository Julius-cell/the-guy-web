export function collapseSection(element: HTMLDivElement) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // temporarily disable all css transitions
  const elementTransition = element.style.transition;
  element.style.transition = '';

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(() => {
    element.style.height = `${sectionHeight}px`;
    element.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(() => (element.style.height = `${0}px`));
  });

  // mark the section as "currently collapsed"
  element.setAttribute('data-collapsed', 'true');
}

export function expandSection(element: HTMLDivElement) {
  // get the height of the element's inner content, regardless of its actual size
  const sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = `${sectionHeight}px`;

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function transitionEndEventHandler() {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', transitionEndEventHandler);
  });

  // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
}
