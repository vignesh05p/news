import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/app.css'; // Reuse your base styles

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  if (!article) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>❌ No article data found.</p>;
  }

  return (
    <div className="article-detail" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <button onClick={() => navigate(-1)} className="read-more-btn">← Back</button>
      <h1 style={{ marginTop: '1rem' }}>{article.title}</h1>
      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="article-img" style={{ marginTop: '1rem' }} />
      )}
      <p style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: '1.6' }}>{article.content}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: '1.5rem', color: '#3B82F6', fontWeight: 'bold' }}
      >
        View Original Article 🔗
      </a>
    </div>
  );
};

export default ArticleDetail;
