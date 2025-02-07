function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function bookSlot(formData) {
  try {
    var sheet = SpreadsheetApp.openById("SHEET_ID").getSheetByName("SHEET_NAME"); // Replace with actual sheet ID , and sheet name
    if (!sheet) {
      return { success: false, message: "Sheet 'Bookings' not found!" };
    }

    // Append data to the next available row
    sheet.appendRow([new Date(), formData.flat, formData.project, formData.timeSlot, formData.day]);

    return { success: true };
  } catch (error) {
    return { success: false, message: "Error: " + error.toString() };
  } 
}
