const STORAGE_KEY = "techlib-lab-progress";

export function getCompletedLabs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return [];
    }

    const progress = JSON.parse(saved);

    return Array.isArray(progress) ? progress : [];
  } catch {
    return [];
  }
}

export function isLabCompleted(labId) {
  const completedLabs = getCompletedLabs();

  return completedLabs.includes(Number(labId));
}

export function markLabAsCompleted(labId) {
  const completedLabs = getCompletedLabs();
  const id = Number(labId);

  if (!completedLabs.includes(id)) {
    completedLabs.push(id);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(completedLabs)
    );
  }

  return completedLabs;
}

export function unmarkLabAsCompleted(labId) {
  const completedLabs = getCompletedLabs();
  const id = Number(labId);

  const updatedProgress = completedLabs.filter(
    (completedId) => completedId !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedProgress)
  );

  return updatedProgress;
}

export function getProgressStats(totalLabs) {
  const completedLabs = getCompletedLabs();

  const completed = completedLabs.length;
  const total = Number(totalLabs);
  const percentage = total > 0
    ? Math.round((completed / total) * 100)
    : 0;

  return {
    completed,
    total,
    percentage,
  };
}
