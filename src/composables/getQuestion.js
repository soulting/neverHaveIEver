const getQuestion = async (questionCategory) => {
  try {
    const response = await fetch(
      "http://localhost:3000/kategorie/" + questionCategory
    );
    if (response.ok) {
      const data = await response.json();
      return data.pytania[Math.floor(Math.random() * 5)];
    } else {
      throw new Error("loading the question failed");
    }
  } catch (error) {
    return error;
  }
};

export default getQuestion;
