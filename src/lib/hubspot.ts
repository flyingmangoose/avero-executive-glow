const HUBSPOT_PORTAL_ID = "24211389";

// Verekar.com - General Contact form
const HUBSPOT_FORM_ID = "677dde65-ed57-44ab-93fc-d3bb64686196";

const HUBSPOT_PORTAL_ID = "24211389";

export const HUBSPOT_FORMS = {
      generalContact: "677dde65-ed57-44ab-93fc-d3bb64686196",
      speakingRequest: "9c52de17-efdb-47a7-b261-e15d869240f9",
      bookReservation: "5b80993b-caef-4735-88ea-f95fca9538ba",
} as const;
interface HubSpotField {
      name: string;
      value: string;
}

export async function submitToHubSpot(
      formId: string,
      fields: HubSpotField[]
    ): Promise<boolean> {
      const payload = {
              fields,
              context: {
                        pageUri: window.location.href,
                        pageName: document.title,
              },
      };
    
      try {
              const response = await fetch(
                        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`,
                  {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(payload),
                  }
                      );
          
              if (!response.ok) {
                        console.error("HubSpot submission failed:", await response.text());
                        return false;
              }
          
              return true;
      } catch (error) {
              console.error("HubSpot submission error:", error);
              return false;
      }
}interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function submitToHubSpot(data: ContactFormData): Promise<boolean> {
    const [firstName, ...lastParts] = data.name.trim().split(" ");
    const lastName = lastParts.join(" ") || "";

  const fields = [
    { name: "firstname", value: firstName },
    { name: "lastname", value: lastName },
    { name: "email", value: data.email },
    { name: "message", value: data.message },
      ];

  const payload = {
        fields,
        context: {
                pageUri: window.location.href,
                pageName: document.title,
        },
  };

  try {
        const response = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
          {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
          }
              );

      if (!response.ok) {
              const errorText = await response.text();
              console.error("HubSpot submission failed:", errorText);
              return false;
      }

      return true;
  } catch (error) {
        console.error("HubSpot submission error:", error);
        return false;
  }
}
