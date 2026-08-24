import { useState } from "react";
import { toast } from "react-toastify";

export default function useCommunitySuggestions(
  cards,
  sendComments,
  getComments,
  updateCommentLikes,
  comments
) {
  const [showSuggestionForm, setShowSuggestionForm] = useState(false);

  const [suggestionName, setSuggestionName] = useState("");
  const [cardSearch, setCardSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [suggestionType, setSuggestionType] = useState("");
  const [comment, setComment] = useState("");

  const [sortBy, setSortBy] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const [votedComments, setVotedComments] = useState({});

  const totalSuggestions = comments.length;

  const totalVotes = comments.reduce((sum, savedComment) => {
    return sum + Number(savedComment.like || 0);
  }, 0);

  const cardOptions = cards
    .filter((card) =>
      card.name
        .toLowerCase()
        .includes(cardSearch.toLowerCase())
    )
    .slice(0, 5);

  const filteredComments = comments
    .filter((savedComment) => {
      if (typeFilter === "All Types") {
        return true;
      }

      return savedComment.type === typeFilter;
    })
    .sort((a, b) => {
      if (sortBy === "A-Z") {
        return a.name.localeCompare(b.name);
      }

      if (sortBy === "Likes ↑") {
        return Number(a.like || 0) - Number(b.like || 0);
      }

      if (sortBy === "Likes ↓") {
        return Number(b.like || 0) - Number(a.like || 0);
      }

      return 0;
    });

  function handleToggleSuggestionForm() {
    setShowSuggestionForm((prev) => !prev);
  }

  function handleCardSearch(e) {
    setCardSearch(e.target.value);
    setSelectedCard(null);
  }

  function handleSelectCard(card) {
    setSelectedCard(card);
    setCardSearch(card.name);
  }

  async function handlePostSuggestion() {
    if (
      suggestionName.trim() === "" ||
      selectedCard === null ||
      suggestionType === "" ||
      comment.trim() === ""
    ) {
      toast.error(
        "Please fill in all the fields before posting your suggestion."
      );

      return;
    }

    const newComment = {
      name: suggestionName.trim(),
      card: selectedCard.name,
      type: suggestionType,
      suggestion: comment.trim(),
      like: 0,
    };

    await sendComments(newComment);
    await getComments();

    setSuggestionName("");
    setCardSearch("");
    setSelectedCard(null);
    setSuggestionType("");
    setComment("");
  }

  async function handleLike(savedComment) {
    if (votedComments[savedComment.id]) {
      return;
    }

    const newLikes = Number(savedComment.like || 0) + 1;

    await updateCommentLikes(savedComment.id, newLikes);

    await getComments();

    setVotedComments((prev) => ({
      ...prev,
      [savedComment.id]: "like",
    }));
  }

  async function handleDislike(savedComment) {
    if (
      votedComments[savedComment.id] ||
      Number(savedComment.like || 0) === 0
    ) {
      return;
    }

    const newLikes = Number(savedComment.like || 0) - 1;

    await updateCommentLikes(savedComment.id, newLikes);

    await getComments();

    setVotedComments((prev) => ({
      ...prev,
      [savedComment.id]: "dislike",
    }));
  }

  return {
    showSuggestionForm,
    suggestionName,
    cardSearch,
    selectedCard,
    suggestionType,
    comment,
    cardOptions,
    typeFilter,
    sortBy,
    votedComments,

    totalSuggestions,
    totalVotes,

    filteredComments,

    setSuggestionName,
    setSuggestionType,
    setComment,
    setSortBy,
    setTypeFilter,

    handleToggleSuggestionForm,
    handleCardSearch,
    handleSelectCard,
    handlePostSuggestion,

    handleLike,
    handleDislike,
  };
}