const HUBSPOT_PORTAL_ID = "24211389";

// Verekar.com - General Contact form
const HUBSPOT_FORM_ID = "677dde65-ed57-44ab-93fc-d3bb64686196";

interface ContactFormData {
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
