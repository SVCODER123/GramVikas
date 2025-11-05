-- GramVikas Insights MVP Database Schema
-- Real Maharashtra Agricultural Data

-- Crops table
CREATE TABLE IF NOT EXISTS crops (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  name_hi VARCHAR(100),
  name_mr VARCHAR(100),
  local_name VARCHAR(100),
  category VARCHAR(50),
  category_hi VARCHAR(50),
  category_mr VARCHAR(50),
  season VARCHAR(50),
  season_hi VARCHAR(50),
  season_mr VARCHAR(50),
  growing_period_days INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Markets table (APMC Markets in Maharashtra)
CREATE TABLE IF NOT EXISTS markets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  name_hi VARCHAR(100),
  name_mr VARCHAR(100),
  district VARCHAR(100),
  district_hi VARCHAR(100),
  district_mr VARCHAR(100),
  region VARCHAR(50),
  region_hi VARCHAR(50),
  region_mr VARCHAR(50),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  apmc_code VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Price data (historical market prices)
CREATE TABLE IF NOT EXISTS prices (
  id SERIAL PRIMARY KEY,
  crop_id INT NOT NULL REFERENCES crops(id),
  market_id INT NOT NULL REFERENCES markets(id),
  price_per_quintal INT NOT NULL,
  date DATE NOT NULL,
  source VARCHAR(100) DEFAULT 'Agmarknet',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(crop_id, market_id, date)
);

-- Knowledge base articles
CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  title_hi VARCHAR(255),
  title_mr VARCHAR(255),
  category VARCHAR(100),
  category_hi VARCHAR(100),
  category_mr VARCHAR(100),
  content TEXT,
  content_hi TEXT,
  content_mr TEXT,
  author VARCHAR(100),
  source VARCHAR(100),
  published_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Government schemes
CREATE TABLE IF NOT EXISTS schemes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  name_hi VARCHAR(255),
  name_mr VARCHAR(255),
  description TEXT,
  description_hi TEXT,
  description_mr TEXT,
  eligibility TEXT,
  eligibility_hi TEXT,
  eligibility_mr TEXT,
  benefits TEXT,
  benefits_hi TEXT,
  benefits_mr TEXT,
  application_link VARCHAR(255),
  department VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Regional statistics
CREATE TABLE IF NOT EXISTS regional_stats (
  id SERIAL PRIMARY KEY,
  district VARCHAR(100) NOT NULL,
  district_hi VARCHAR(100),
  district_mr VARCHAR(100),
  crop_id INT REFERENCES crops(id),
  area_under_cultivation DECIMAL(10, 2),
  production_tonnes DECIMAL(10, 2),
  avg_yield_per_hectare DECIMAL(10, 2),
  year INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
