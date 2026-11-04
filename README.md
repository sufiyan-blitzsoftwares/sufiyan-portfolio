# Mohammed Sufiyan — developer portfolio

A responsive, single-page portfolio built with semantic HTML, compiled Tailwind CSS, custom CSS, and vanilla JavaScript. Content and project stacks follow the supplied résumé.

## Files
- `index.html` — complete page, including all CSS and JavaScript.
- `Mohammed-Sufiyan-Resume.pdf` — résumé linked from the hero.
- `profile-avatar.svg` — original MS initials avatar and fallback for a missing replacement photo.

## Preview and deploy
Open `index.html` directly in a browser, or serve this folder with any static web server. Upload both files to the same directory on any static hosting service or cPanel `public_html`. Set `index.html` as the entry page. No npm installation, API keys, or build step is required.

The Tailwind utility stylesheet is precompiled and embedded, so no external scripts, fonts, images, or network dependencies are required to render the page. Custom CSS provides the visual design and responsive layouts. Project artwork is original typographic artwork, not screenshots of the live sites.

## Contact form
The contact form uses a normal HTML POST to FormSubmit. It does not need a Vercel function, API key, or environment variables. FormSubmit may require you to confirm `itzsufiyan.mohammed@gmail.com` the first time a message is sent; check the inbox and spam folder for its activation email and follow the link. The visitor is returned to the portfolio after submission. Direct email and phone links are also available as alternatives.

## Included interactions and accessibility
- Sticky navigation with active-section indicators.
- Responsive mobile menu with expanded state and Escape-to-close.
- Native form validation and live status messages.
- Skip-to-content link, semantic landmarks, labeled fields, visible focus styles, and reduced-motion support.
- Résumé download and links to the four original project domains supplied in the résumé, plus five additional project cards with placeholder URLs.
- Automatic footer year and print-specific styles.

## Editing
All content is in `index.html`. Design tokens are defined at the start of the second style block. Contact details also appear in the form script, so update both the links and script if they change. If replacing project URLs, retain `rel="noopener noreferrer"` for new-tab links.

If adding Tailwind utility classes that are not already compiled, rebuild the utility stylesheet or add the appropriate rules to the custom stylesheet. The delivered file requires no build step as-is.


## Update the new project and profile URLs
Search for `REPLACE_ME` in `index.html`. There are eight marked links:

| Item | Placeholder URL |
| --- | --- |
| LinkedIn | `https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/` |
| GitHub | `https://github.com/YOUR-GITHUB-USERNAME` |
| Personal portfolio | `https://example.com/your-portfolio` |
| Mahabeej ERP | `https://example.com/projects/mahabeej-erp` |
| HMIS — Hospital Management | `https://example.com/projects/hmis-hospital-management` |
| Bimagine Interiors | `https://example.com/projects/bimagine-interiors` |
| Chemverto | `https://example.com/projects/chemverto` |
| Ezzy Computer | `https://example.com/projects/ezzy-computer` |

Replace each anchor's `href` with your real URL. The five new project links intentionally use the reserved `example.com` domain, not an assumed live site. Original project links are unchanged.

After replacing URLs, remove the `placeholder-note` spans from new project cards, remove the “Replace profile URL”/“Replace portfolio URL” detail spans, update placeholder wording in `aria-label` and `title` attributes, and remove “placeholder links” from the profile section subtitle. Keep the descriptive link labels and new-tab notices.

The portfolio now contains nine project cards. The Skills section also includes .NET, C#, MVC, Microservices, CodeIgniter, and ABDM integrations to reflect the additional project stacks. Existing employment details and the supplied résumé PDF have not been changed.


## Electric blue/cyan redesign
- Light mode uses cool white surfaces and electric-blue accents; dark mode uses midnight navy and cyan/blue accents.
- The header theme button works on mobile and desktop, initially follows the operating system, and remembers a visitor’s choice in localStorage when available. It also works when storage is blocked.
- Blue/cyan hover treatments, animated button highlights, card elevation, and icon interactions are included. Floating hero labels and one-time scroll reveals respect the visitor’s reduced-motion preference. Touch devices do not rely on hover effects.
- Responsive layouts were checked at 320, 375, 390, 430, 740, 768, 820, 1024, 1280, 1440, and 1920 CSS pixels in both light and dark mode. No horizontal page overflow was found in these tests.

## Replace the initials avatar with your photo
1. Add a square portrait named `profile.jpg` beside `index.html` (approximately 600–900 pixels square, compressed for the web).
2. Search `REPLACE_PROFILE_PHOTO` in `index.html`.
3. On the image immediately below that comment, replace its entire `src="data:image/svg+xml,..."` attribute with `src="profile.jpg"`.
4. Change its alt text to `alt="Portrait of Mohammed Sufiyan"`.

The photo is cropped into a circle using `object-fit: cover`. Adjust `object-position` on `.profile-photo` if needed. Keep `profile-avatar.svg` in the deployment folder for the missing-photo fallback. The default initials avatar is embedded in the HTML, so it also renders in offline/sandboxed previews.


## Animated gradient, hero, loading, glass, and ambient effects
The `motion-and-glass` style block contains the latest effects:

- **Animated gradients:** the e-commerce hero headline, primary project button, and contact CTA cycle gently through blue/cyan tones.
- **Hero animations:** avatar orbit, floating skill labels, a subtle terminal cursor, and the existing entrance effects.
- **Loading feedback:** a slim top progress animation and small non-blocking loading badge appear only while the page is loading (with a 2.5-second fail-safe). A shimmer skeleton is shown only when the portrait image is actually pending. There is no artificial loading delay or page-blocking splash screen.
- **Glassmorphism:** frosted navigation, profile portrait, floating labels, and social profile cards; a pointer spotlight and hover sheen provide interaction. Browsers without backdrop-filter support get opaque, readable surfaces.
- **Ambient background:** slowly drifting blue/cyan glows and a subtle breathing grid are confined to the hero, so project descriptions remain distraction-free. Mobile uses fewer, smaller glows.

Decorative animations run continuously by default, with no pause/play button or saved pause state. Operating-system reduced-motion settings are still respected. Content stays visible with reduced motion enabled or JavaScript disabled. The spotlight is limited to fine-pointer devices; animation frames are scheduled only on pointer movement.

Test coverage includes real delayed-image loading and skeleton cleanup, continuous animation, reduced motion, theme persistence, navigation, the contact form, and no-JavaScript visibility.
