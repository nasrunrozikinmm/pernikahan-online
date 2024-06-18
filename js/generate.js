document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("invitationForm");
  const copyMessage = document.getElementById("copyMessage");
  const query = new URLSearchParams(window.location.search).has("generate");
  if (query) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let guestName = document.getElementById("to").value.trim();
      guestName = capitalizeFirstLetter(guestName);

      if (guestName) {
        const baseUrl = "https://pernikahan-online.vercel.app/?to=";
        const encodedName = encodeURIComponent(guestName);
        const invitationUrl = `${baseUrl}${encodedName}`;
        const fullMessage = `Kepada Yth. 
*${guestName}*

_Assalamualaikum Warahmatullahi Wabarakatuh_
                      
Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara kami. Untuk info lengkap dari acara bisa kunjungi link dibawah ini:

${invitationUrl}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan do'a restu.

*Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*

Terima kasih banyak atas perhatiannya.

_Wassalamualaikum Warahmatullahi Wabarakatuh_`;

        copyToClipboard(fullMessage);
      }
    });
  }

  function capitalizeFirstLetter(name) {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      copyMessage.style.display = "block";
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    document.body.removeChild(textArea);
  }
});
