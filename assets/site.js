// Copy buttons: data-copy names the <pre> to copy; prompts ("$ ") and comments are left out.
document.querySelectorAll('button[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const pre = document.getElementById(btn.dataset.copy);
    if (!pre) return;
    const clone = pre.cloneNode(true);
    clone.querySelectorAll('.p, .c').forEach((el) => el.remove());
    const text = clone.textContent.split('\n').map((l) => l.trim()).filter(Boolean).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied';
    } catch {
      btn.textContent = 'Copy failed';
    }
    setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
  });
});
