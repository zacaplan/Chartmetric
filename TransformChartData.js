function TransformChartData(response) {
    const groupedData = {};
  
    for (const station of response) {
      for (const track of station.tracks) {
        const date = track.timestp;
        groupedData[date] = groupedData[date] || { totalSpins: 0, trackCounts: {} };
        groupedData[date].totalSpins++;
        groupedData[date].trackCounts[track.trackName] = (groupedData[date].trackCounts[track.trackName] || 0) + 1;
      }
    }
  
    const dates = Object.keys(groupedData).sort();
    const data = dates.map(date => {
      const { totalSpins, trackCounts } = groupedData[date];
      const tooltip = Object.entries(trackCounts).map(([trackName, count]) => `${trackName} (${count})`).join(', ');
      
      return { x: date, y: totalSpins, tooltip };
    });
  
    return data;
  }