function getDuration(fromDate) {
	      const now = new Date();
	      const start = new Date(fromDate);

	      let years = now.getFullYear() - start.getFullYear();
	      let months = now.getMonth() - start.getMonth();
	      let days = now.getDate() - start.getDate();

	      if (days < 0) {
	        months -= 1;
	        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
	      }

	      if (months < 0) {
	        years -= 1;
	        months += 12;
	      }

	      let years_ = "years"
	      let months_ = "months"
	      let days_ = "days"

	      if (days == 1) {
	      	days_ = "day"
	      }

	      if (months == 1) {
	      	months_ = "month"
	      }

	      if (years == 1) {
	      	years_ = "year"
	      }

	      if (months == 0 && days == 0) {
	      	console.log("yes")
	      	return `${years} ${years_}`
	      }

	      if (years == 0 && days == 0) {
	      	console.log("yes")
	      	return `${months} ${months_}`
	      }

	      if (years == 0) {
	      	return `${months} ${months_} ${days} ${days_}`;
	      }

	      if (months == 0) {
	      	return `${years} ${years_} ${days} ${days_}`;
	      }

	      if (days == 0) {
	      	return `${years} ${years_} ${months} ${months_}`;
	      }

	      return `${years} ${years_} ${months} ${months_} ${days} ${days_}`;
	    }

	    document.getElementById("duration").innerText = getDuration("2025-02-08");
