import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/app.css';

import LazyImage from './components/LazyImage';
import EngagementTracker from './components/EngagementTracker';
import NetworkHandler from './components/NetworkHandler';
import FeedbackForm from './components/FeedbackForm';
import SkeletonCard from './components/SkeletonCard';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&category=technology`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const articles = data.results.map((item, idx) => ({
          id: idx,
          title: item.title,
          content: item.description,
          imageUrl: item.image_url || "/sample.jpg",
          url: item.link,
          fullData: item
        }));
        setArticles(articles);
      })
      .catch((err) => console.error("❌ Failed to fetch NewsData.io articles", err));
  }, []);

  const handleNavigate = (article) => {
    navigate(`/article/${article.id}`, { state: { article } });
  };

  // Pagination Logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div>
      <NetworkHandler />
      <h1 className="main-heading">📰 Smart Article Reader - Tech News</h1>

      {articles.length === 0 ? (
        <div className="article-grid">
          {Array.from({ length: 6 }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      ) : (
        <>
          <div className="article-grid">
            {currentArticles.map((article, index) => (
              <div key={index}>
                <EngagementTracker sectionId={`article-${index}`} />
                <section
                  className="article-section"
                  onClick={() => handleNavigate(article)}
                  style={{ cursor: 'pointer' }}
                >
                  <h2>{article.title}</h2>
                  {article.imageUrl && (
                    <LazyImage
                      src={article.imageUrl}
                      alt={article.title}
                      className="article-img"
                    />
                  )}
                </section>
              </div>
            ))}
          </div>

          {/* Pagination UI */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={currentPage === idx + 1 ? 'active' : ''}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </>
      )}

      <FeedbackForm />
    </div>
  );
};

export default App;
