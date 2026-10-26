/**
 * Receives enquiries from the landing page and saves them in the bound Sheet.
 * Paste this file into Extensions > Apps Script in your Google Sheet.
 */
const HEADERS = ['Submitted at', 'Full name', 'Phone / WhatsApp', 'Email', 'Current status', 'Page URL'];

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents || '{}');
    const name = cleanCell(data.name);
    const phone = cleanCell(data.phone);
    const email = cleanCell(data.email);
    const status = cleanCell(data.status);
    const pageUrl = cleanCell(data.source);

    if (!name || !phone || !email || !status) {
      return jsonResponse({ ok: false, error: 'Missing required fields.' });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheets()[0];
    const lock = LockService.getDocumentLock();
    lock.waitLock(10000);
    try {
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([new Date(), name, phone, email, status, pageUrl]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: 'Could not save this enquiry.' });
  }
}

// Prevent submitted text from being interpreted as a spreadsheet formula.
function cleanCell(value) {
  const text = String(value || '').trim().slice(0, 500);
  return /^[=+@]/.test(text) || /^-/.test(text) ? "'" + text : text;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
