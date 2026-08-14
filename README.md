Accessibility fixes:
in index.html: WAVE flagged a skipped heading level on "What I'm Working on" (jumped from h2 to h4) which I fixed by changing it back to h2 so headings go in order (h1 to h2), which lets screen reader users go through my page without confusion.

in projects.html: WAVE flagged a skipped heading level on "School Projects" (jumped from h1 to h4) which I fixed by changing it back to h2 so the heading order is in order from h1 to h2 to h3, instead of skipping two levels at once.

in about.html: WAVE flagged a skipped heading level on "Contact" (jumped from h2 to h4) which I fixed by changing it back to h2 so the heading order is in order and so it made sense.

changed the link color from a lighter blue to a darker blue (#0B5FA5) so it would pass WCAG AA color contrast against white backgrounds.

made the email and GitHub contact info real clickable links (mailto: and https://) instead of plain text.

every input in the contact form has a real       < label > tag linked to it with matching for/id, instead of relying on a placeholder.

grouped the "Reason for Contact" radio buttons in a < fieldset > with a < legend >, so a screen reader reads the questions first, then each option.

form errors show up as visible text next to each field instead of a popup alert, so the message stays on the page and is readable by anyone.

fixed a typo in my JavaScript (getElementbyId instead of getElementById) and a missing curly brace in the email validation that was silently breaking the whole script, so the error messages actually show up now.

added a novalidate to the form tag so my own error messages show up instead of the browser's default validation popups taking over first.

Gestalt Principles Added/Applied:
Proximity: the two related sections on each page sit close together inside one container, showing they're part of the same message.

Similarity: every content card on all three pages sharws the same white background, border, and rounded corners, so they read as the same type of content block.

Color Palatte:
same across all page: navy (#1B3A5C), light gray (#F5F5F5/#EAEAEA), white (#FFFFFF), dark blue links (#0B5FA5), dark red for form errors only (#B00020).

all colors verified on WebAIM, only one that failed was the color combo dark blue and white on WCAG AAA normal text, but it still passes the other checks and the rubric with WCAG AA being passed on normal text, and every WCAG being a pass apart from just the one fail.