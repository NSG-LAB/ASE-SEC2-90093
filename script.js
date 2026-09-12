// Interactive logic for N. Siva Ganesh Profile

document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copyIdBtn');
  const copyLabel = document.getElementById('copyBtnLabel');
  const studentIdText = document.getElementById('studentIdText').innerText.trim();
  const toast = document.getElementById('toast');
  const greetBtn = document.getElementById('greetBtn');
  const shareBtn = document.getElementById('shareProfileBtn');

  // Show Toast Function
  function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // Copy ID to Clipboard
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(studentIdText);
      copyLabel.textContent = 'Copied!';
      showToast(`✅ Student ID ${studentIdText} copied to clipboard!`);
      setTimeout(() => {
        copyLabel.textContent = 'Copy ID';
      }, 2000);
    } catch (err) {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = studentIdText;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(`✅ Student ID ${studentIdText} copied!`);
    }
  });

  // Say Hello Interaction
  greetBtn.addEventListener('click', () => {
    const greetings = [
      "👋 Hello N. Siva Ganesh! Best wishes for your journey at KL University!",
      "🚁 Ready for takeoff with the Garuda Drone Club!",
      "⚡ Greetings to Tenali's very own CSIT innovator!",
      "🚀 Flying high with aerial robotics and engineering!"
    ];
    const randomGreet = greetings[Math.floor(Math.random() * greetings.length)];
    showToast(randomGreet, 4000);
  });

  // Share Profile
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'N. Siva Ganesh - Student Profile',
      text: 'Check out N. Siva Ganesh (ID: 2400090093), CSIT at KL University, Member of Garuda Drone Club!',
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or not supported
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('🔗 Profile link copied to clipboard!');
      } catch (e) {
        showToast('Profile: N. Siva Ganesh | KL University CSIT');
      }
    }
  });
});
