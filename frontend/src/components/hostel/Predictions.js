import React, { useState } from 'react';
import axios from 'axios';

function Predictions({ user }) {
  const [formData, setFormData] = useState({
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    mealType: 'lunch'
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/predictions/hostel/predict',
        { ...formData, userId: user.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPrediction(response.data);
    } catch (error) {
      console.error('Error generating prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card">
        <h2>AI Food Requirement Prediction</h2>
        
        <form onSubmit={handlePredict}>
          <div className="input-group">
            <label>Prediction Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <label>Meal Type</label>
            <select
              value={formData.mealType}
              onChange={(e) => setFormData({ ...formData, mealType: e.target.value })}
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Generating...' : '🤖 Generate Prediction'}
          </button>
        </form>
      </div>

      {prediction && (
        <div>
          <div className="grid grid-3">
            <div className="stat-card">
              <h3>Predicted Quantity</h3>
              <div className="value">{prediction.predictedQuantity} kg</div>
            </div>
            <div className="stat-card">
              <h3>Avg Waste</h3>
              <div className="value">{prediction.avgWasted} kg</div>
            </div>
            <div className="stat-card">
              <h3>Waste %</h3>
              <div className="value">{prediction.wastePercentage}%</div>
            </div>
          </div>

          <div className="card">
            <h3>Historical Averages</h3>
            <div className="prediction-details">
              <p><strong>Day:</strong> {prediction.dayOfWeek}</p>
              <p><strong>Avg Cooked:</strong> {prediction.avgCooked} kg</p>
              <p><strong>Avg Served:</strong> {prediction.avgServed} kg</p>
              <p><strong>Data Points:</strong> {prediction.dataPoints} records</p>
            </div>
          </div>

          {prediction.recommendations && prediction.recommendations.length > 0 && (
            <div className="card">
              <h3>🎯 AI Recommendations</h3>
              {prediction.recommendations.map((rec, index) => (
                <div key={index} className="alert alert-warning" style={{ marginBottom: '12px' }}>
                  {rec}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Predictions;
