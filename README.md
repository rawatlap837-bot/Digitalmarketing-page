# Creative Adhyayan landing page

This is a React site built with Vite and Tailwind CSS. The code is organized so you can change the words and lists without needing to rebuild the layout.

## Run the site

- `npm run dev` starts the local preview.
- `npm run build` creates the production site in `dist`.

## Where to make common changes

- **Main headline and hero text:** `src/sections/Hero.jsx`, in the `heroContent` object near the top.
- **Main page sections and course modules:** `src/sections/ContentSections.jsx`.
- **Class details and portfolio copy:** `src/sections/ProgramDetails.jsx`.
- **FAQ questions and answers:** `src/sections/FAQ.jsx`, in the `questions` list.
- **Who the course is for and career paths:** `src/sections/Roadmap.jsx`.
- **Page section order:** `src/App.jsx`.
- **Colors, spacing, animation and responsive styling:** `src/index.css` and `tailwind.config.js`.
- **Photos and tool logos:** files in `public/images`.

## Editing section copy

In the content lists, `title` is the section heading, `paragraphs` is the introductory text, `items` is a list of points, and `notes` is supporting text shown below the list. For course modules, edit each module's `title`, `topics`, and `project` values. Keep the `id` the same when you only want to change wording; the site uses it to choose section-specific layout and styles.

Some text supports simple formatting: wrap words in `**double asterisks**` to make them bold, or `__double underscores__` to underline them.

## Save enquiries to Google Sheets

The lead form can send its name, phone, email and current status to a Google Sheet through Apps Script.

1. Create or open the Google Sheet where enquiries should be stored.
2. In the sheet, open **Extensions → Apps Script**. Replace the editor contents with `google-apps-script/Code.gs`, then save.
3. Choose **Deploy → New deployment → Web app**. Set **Execute as** to your Google account and **Who has access** to **Anyone**, then deploy and approve Google's authorization prompt.
4. Copy the deployed web app URL ending in `/exec`.
5. The deployed web app URL is set directly in `src/components/LeadForm.jsx`. If you replace the Apps Script deployment, update `sheetWebhookUrl` there.
6. Deploy the updated site so the production page includes the configured endpoint.

The script appends a header row and then one row per enquiry to the first sheet tab. Apps Script web apps do not expose a readable response to a browser request made without CORS preflight, so the form can confirm that the request was sent but cannot verify that Sheets accepted it. Test with a sample enquiry and check the sheet before collecting live leads.
