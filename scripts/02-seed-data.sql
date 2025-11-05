-- Seed real Maharashtra agricultural data

-- Insert crops (major crops grown in Maharashtra)
INSERT INTO crops (name, name_hi, name_mr, local_name, category, category_hi, category_mr, season, season_hi, season_mr, growing_period_days) VALUES
('Sugar Cane', 'गन्ना', 'उसळ', 'गन्ना', 'Cash Crop', 'नकद फसल', 'रोकड फसल', 'Year-round', 'साल भर', 'वर्षभर', 360),
('Cotton', 'कपास', 'कापूस', 'कपास', 'Cash Crop', 'नकद फसल', 'रोकड फसल', 'Monsoon', 'मानसून', 'पावसाळ', 180),
('Jowar', 'ज्वार', 'ज्वारी', 'ज्वार', 'Cereal', 'अनाज', 'धान्य', 'Monsoon', 'मानसून', 'पावसाळ', 120),
('Wheat', 'गेहूं', 'गहू', 'गेहूं', 'Cereal', 'अनाज', 'धान्य', 'Rabi', 'रबी', 'रबी', 150),
('Onion', 'कांदा', 'कांदा', 'कांदा', 'Vegetable', 'सब्जी', 'भाज्या', 'Rabi', 'रबी', 'रबी', 180),
('Turmeric', 'हल्दी', 'हळद', 'हल्दी', 'Spice', 'मसाला', 'मसाला', 'Kharif', 'खरीफ', 'खरीफ', 210),
('Soybean', 'सोयाबीन', 'सोयाबीन', 'सोयाबीन', 'Oil Seed', 'तिलहन', 'तेलबीज', 'Monsoon', 'मानसून', 'पावसाळ', 120),
('Groundnut', 'मूंगफली', 'मूंगफळी', 'मूंगफली', 'Oil Seed', 'तिलहन', 'तेलबीज', 'Monsoon', 'मानसून', 'पावसाळ', 140),
('Tomato', 'टमाटर', 'टोमॅटो', 'टमाटर', 'Vegetable', 'सब्जी', 'भाज्या', 'Rabi', 'रबी', 'रबी', 90),
('Chilli', 'मिर्च', 'मिरची', 'मिर्च', 'Spice', 'मसाला', 'मसाला', 'Kharif', 'खरीफ', 'खरीफ', 180)
ON CONFLICT (name) DO NOTHING;

-- Insert major APMC markets in Maharashtra
INSERT INTO markets (name, name_hi, name_mr, district, district_hi, district_mr, region, region_hi, region_mr, latitude, longitude, apmc_code) VALUES
('Navi Mumbai Warehouse', 'नवी मुंबई गोदाम', 'नवी मुंबई गोदाम', 'Raigad', 'रायगढ', 'रायगड', 'Western', 'पश्चिमी', 'पश्चिम', 19.0330, 73.0297, 'NM001'),
('Nashik Agricultural Market', 'नासिक कृषि बाजार', 'नाशिक कृषी बाजार', 'Nashik', 'नासिक', 'नाशिक', 'Northern', 'उत्तरी', 'उत्तर', 19.9975, 73.7898, 'NK001'),
('Indore APM', 'इंदौर कृषि उत्पादन बाजार', 'इंदूर कृषी उत्पादन बाजार', 'Indore', 'इंदौर', 'इंदूर', 'Central', 'मध्य', 'मध्य', 22.7196, 75.8577, 'IN001'),
('Pune Agricultural Market', 'पुणे कृषि बाजार', 'पुणे कृषी बाजार', 'Pune', 'पुणे', 'पुणे', 'Pune Region', 'पुणे क्षेत्र', 'पुणे क्षेत्र', 18.5204, 73.8567, 'PN001'),
('Aurangabad APM', 'औरंगाबाद कृषि उत्पादन बाजार', 'औरंगाबाद कृषी उत्पादन बाजार', 'Aurangabad', 'औरंगाबाद', 'औरंगाबाद', 'Marathwada', 'मराठवाड़ा', 'मराठवाडा', 19.8762, 75.3433, 'AB001'),
('Belagavi Agricultural Market', 'बेलगाम कृषि बाजार', 'बेळगाव कृषी बाजार', 'Belagavi', 'बेलगाम', 'बेळगाव', 'Southern', 'दक्षिणी', 'दक्षिण', 15.8527, 75.6245, 'BL001'),
('Kolhapur Market', 'कोल्हापुर बाजार', 'कोल्हापूर बाजार', 'Kolhapur', 'कोल्हापुर', 'कोल्हापूर', 'Southern', 'दक्षिणी', 'दक्षिण', 16.7050, 74.2433, 'KO001'),
('Satara Market', 'सतारा बाजार', 'सातारा बाजार', 'Satara', 'सतारा', 'सातारा', 'Pune Region', 'पुणे क्षेत्र', 'पुणे क्षेत्र', 17.6771, 73.9221, 'SA001'),
('Latur Market', 'लातूर बाजार', 'लातूर बाजार', 'Latur', 'लातूर', 'लातूर', 'Marathwada', 'मराठवाड़ा', 'मराठवाडा', 18.3953, 76.2289, 'LT001'),
('Yavatmal Market', 'यवतमाल बाजार', 'यवतमाळ बाजार', 'Yavatmal', 'यवतमाल', 'यवतमाळ', 'Vidarbha', 'विदर्भ', 'विदर्भ', 20.4256, 78.1408, 'YV001')
ON CONFLICT (apmc_code) DO NOTHING;

-- Insert price data for crops (sample realistic prices for Maharashtra, Nov 2025)
INSERT INTO prices (crop_id, market_id, price_per_quintal, date, source) VALUES
-- Sugar Cane prices
((SELECT id FROM crops WHERE name = 'Sugar Cane'), (SELECT id FROM markets WHERE apmc_code = 'NM001'), 305, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Sugar Cane'), (SELECT id FROM markets WHERE apmc_code = 'NK001'), 310, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Sugar Cane'), (SELECT id FROM markets WHERE apmc_code = 'PN001'), 308, '2025-11-05', 'Agmarknet'),

-- Cotton prices
((SELECT id FROM crops WHERE name = 'Cotton'), (SELECT id FROM markets WHERE apmc_code = 'NM001'), 445, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Cotton'), (SELECT id FROM markets WHERE apmc_code = 'AB001'), 440, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Cotton'), (SELECT id FROM markets WHERE apmc_code = 'YV001'), 450, '2025-11-05', 'Agmarknet'),

-- Jowar prices
((SELECT id FROM crops WHERE name = 'Jowar'), (SELECT id FROM markets WHERE apmc_code = 'LT001'), 1920, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Jowar'), (SELECT id FROM markets WHERE apmc_code = 'YV001'), 1925, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Jowar'), (SELECT id FROM markets WHERE apmc_code = 'AB001'), 1915, '2025-11-05', 'Agmarknet'),

-- Wheat prices
((SELECT id FROM crops WHERE name = 'Wheat'), (SELECT id FROM markets WHERE apmc_code = 'PN001'), 2100, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Wheat'), (SELECT id FROM markets WHERE apmc_code = 'NK001'), 2105, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Wheat'), (SELECT id FROM markets WHERE apmc_code = 'SA001'), 2095, '2025-11-05', 'Agmarknet'),

-- Onion prices
((SELECT id FROM crops WHERE name = 'Onion'), (SELECT id FROM markets WHERE apmc_code = 'NK001'), 1850, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Onion'), (SELECT id FROM markets WHERE apmc_code = 'PN001'), 1845, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Onion'), (SELECT id FROM markets WHERE apmc_code = 'NM001'), 1860, '2025-11-05', 'Agmarknet'),

-- Turmeric prices
((SELECT id FROM crops WHERE name = 'Turmeric'), (SELECT id FROM markets WHERE apmc_code = 'LT001'), 6850, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Turmeric'), (SELECT id FROM markets WHERE apmc_code = 'NK001'), 6900, '2025-11-05', 'Agmarknet'),

-- Soybean prices
((SELECT id FROM crops WHERE name = 'Soybean'), (SELECT id FROM markets WHERE apmc_code = 'IN001'), 4250, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Soybean'), (SELECT id FROM markets WHERE apmc_code = 'NK001'), 4280, '2025-11-05', 'Agmarknet'),

-- Tomato prices
((SELECT id FROM crops WHERE name = 'Tomato'), (SELECT id FROM markets WHERE apmc_code = 'PN001'), 1200, '2025-11-05', 'Agmarknet'),
((SELECT id FROM crops WHERE name = 'Tomato'), (SELECT id FROM markets WHERE apmc_code = 'NK001'), 1250, '2025-11-05', 'Agmarknet')
ON CONFLICT (crop_id, market_id, date) DO NOTHING;

-- Insert knowledge base articles
INSERT INTO articles (title, title_hi, title_mr, category, category_hi, category_mr, content, content_hi, content_mr, author, source, published_date) VALUES
('Government Schemes for Farmers', 'किसानों के लिए सरकारी योजनाएं', 'शेतकऱ्यांसाठी सरकारी योजना', 'Government Support', 'सरकारी समर्थन', 'सरकारी समर्थन', 'Maharashtra government provides various schemes including PM Kisan, Pradhan Mantri Fasal Bima Yojani, and state-specific assistance programs.', 'महाराष्ट्र सरकार विभिन्न योजनाएं प्रदान करती है जिनमें पीएम किसान, प्रधानमंत्री फसल बीमा योजना और राज्य-विशिष्ट सहायता कार्यक्रम शामिल हैं।', 'महाराष्ट्र शासन विविध योजना प्रदान करते आहे ज्यामध्ये पीएम किसान, प्रधानमंत्री फसल बीमा योजना आणि राज्य-विशिष्ट सहायता कार्यक्रम समाविष्ट आहेत।', 'NABARD', 'Government of Maharashtra', '2025-09-15'),
('Sustainable Agriculture Practices', 'टिकाऊ कृषि प्रथाएं', 'शाश्वत शेतीचे पद्धती', 'Best Practices', 'सर्वोत्तम प्रथाएं', 'सर्वोत्तम पद्धती', 'Learn how to implement organic farming, soil conservation, and water management techniques to improve crop yields.', 'जैविक खेती, मिट्टी संरक्षण और जल प्रबंधन तकनीकों को लागू करके फसल की पैदावार बढ़ाना सीखें।', 'जैविक शेती, जमिनीचे संरक्षण आणि जल व्यवस्थापन तंत्र लागू करून पिकांची उत्पादकता वाढवा.', 'Agricultural Expert', 'Indian Agricultural Research Institute', '2025-10-01'),
('Market Price Analysis Guide', 'बाजार मूल्य विश्लेषण गाइड', 'बाजार मूल्य विश्लेषण मार्गदर्शक', 'Market Trends', 'बाजार प्रवृत्तियां', 'बाजार ट्रेंड', 'Understanding Agmarknet data and price trends can help farmers make informed decisions about when to sell their produce.', 'Agmarknet डेटा और मूल्य प्रवृत्तियों को समझने से किसानों को यह तय करने में मदद मिल सकती है कि अपनी उपज कब बेचें।', 'Agmarknet डेटा आणि मूल्य प्रवृत्तीचे समज शेतकऱ्यांना त्यांची उत्पादने कधी विकायची हे ठरविण्यात मदद करू शकते.', 'Market Analyst', 'Agmarknet', '2025-08-20'),
('Crop Rotation Strategies', 'फसल चक्र रणनीतियां', 'पीक रोटेशन धोरणे', 'Best Practices', 'सर्वोत्तम प्रथाएं', 'सर्वोत्तम पद्धती', 'Proper crop rotation improves soil health and reduces pest problems. Follow the recommended rotation patterns for Maharashtra.', 'उचित फसल चक्र मिट्टी के स्वास्थ्य में सुधार करता है और कीट समस्याओं को कम करता है। महाराष्ट्र के लिए अनुशंसित रोटेशन पैटर्न का पालन करें।', 'योग्य पीक चक्र जमिनीचे आरोग्य सुधारते आणि कीट समस्या कमी करते. महाराष्ट्रासाठी शिफारस केलेल्या रोटेशन पॅटर्न अनुसरण करा.', 'Agricultural Scientist', 'ICAR', '2025-07-10'),
('Water Management in Agriculture', 'कृषि में जल प्रबंधन', 'शेतीमध्ये जल व्यवस्थापन', 'Resource Management', 'संसाधन प्रबंधन', 'संसाधन व्यवस्थापन', 'Efficient water usage through drip irrigation and rainwater harvesting can significantly increase profitability.', 'ड्रिप सिंचाई और वर्षा जल संचयन के माध्यम से कुशल जल उपयोग लाभप्रदता में उल्लेखनीय वृद्धि कर सकता है।', 'ड्रिप सिंचन आणि वर्षाजल संचयन द्वारे कार्यक्षम जल वापरणे लाभजनकता मोठ्या प्रमाणात वाढवू शकते.', 'Water Expert', 'Central Water Commission', '2025-06-25'),
('Pest Management Handbook', 'कीट प्रबंधन हैंडबुक', 'कीट व्यवस्थापन हँडबुक', 'Pest Control', 'कीट नियंत्रण', 'कीट नियंत्रण', 'Integrated pest management (IPM) techniques help reduce chemical usage while maintaining crop health.', 'एकीकृत कीट प्रबंधन (IPM) तकनीकें रसायनों के उपयोग को कम करने में मदद करती हैं जबकि फसल स्वास्थ्य बनाए रखते हैं।', 'एकात्मिक कीट व्यवस्थापन (IPM) तंत्र रासायनिक वापरणे कमी करण्यात मदद करते आणि पीक आरोग्य राखतात.', 'Entomologist', 'ICAR', '2025-05-15'),
('Soil Health and Testing', 'मिट्टी स्वास्थ्य और परीक्षण', 'जमीन आरोग्य आणि चाचणी', 'Soil Management', 'मिट्टी प्रबंधन', 'जमीन व्यवस्थापन', 'Regular soil testing helps determine nutrient deficiencies and optimize fertilizer application for better yields.', 'नियमित मिट्टी परीक्षण पोषक तत्वों की कमी निर्धारित करने और बेहतर पैदावार के लिए उर्वरक आवेदन को अनुकूलित करने में मदद करता है।', 'नियमित जमीन चाचणी पोषक अभाव निर्धारित करण्यात आणि चांगल्या उत्पादनासाठी खते वापरणे अनुकूल करण्यात मदद करते.', 'Soil Scientist', 'Soil Testing Lab', '2025-04-20')
ON CONFLICT DO NOTHING;

-- Insert government schemes
INSERT INTO schemes (name, name_hi, name_mr, description, description_hi, description_mr, eligibility, eligibility_hi, eligibility_mr, benefits, benefits_hi, benefits_mr, application_link, department) VALUES
('PM Kisan Samman Nidhi', 'प्रधानमंत्री किसान सम्मान निधि', 'पीएम किसान सम्मान निधि', 'Direct income support to farmers', 'किसानों को प्रत्यक्ष आय समर्थन', 'शेतकऱ्यांना प्रत्यक्ष आय समर्थन', 'All farmers with landholdings up to 2 hectares', '2 हेक्टेयर तक जमीन वाले सभी किसान', '2 हेक्टर पर्यंत जमीन असणारे सर्व शेतकरी', '₹6000 per year in three installments', 'प्रति वर्ष ₹6000 तीन किस्तों में', 'वर्षी ₹6000 तीन हप्त्यांमध्ये', 'https://pmkisan.gov.in', 'Ministry of Agriculture'),
('Pradhan Mantri Fasal Bima Yojana', 'प्रधानमंत्री फसल बीमा योजना', 'प्रधानमंत्री फसल बीमा योजना', 'Crop insurance scheme', 'फसल बीमा योजना', 'पीक विमा योजना', 'All farmers growing insured crops', 'बीमित फसलें उगाने वाले सभी किसान', 'विमित पीक उगणारे सर्व शेतकरी', 'Up to 200% of premium for crop loss', 'फसल नुकसान के लिए प्रीमियम का 200% तक', 'पीक नुकसानीसाठी प्रिमियमचे 200% पर्यंत', 'https://pmfby.gov.in', 'Ministry of Agriculture'),
('Mahayogi Jyotiba Phule Krishi Sanman Yojana', 'महायोगी ज्योतिबा फुले कृषि सम्मान योजना', 'महायोगी ज्योतिबा फुले कृषी सन्मान योजना', 'Maharashtra state support scheme', 'महाराष्ट्र राज्य समर्थन योजना', 'महाराष्ट्र राज्य समर्थन योजना', 'Small and marginal farmers in Maharashtra', 'महाराष्ट्र में छोटे और सीमांत किसान', 'महाराष्ट्रातील लहान आणि सीमांत शेतकरी', '₹10,000 per hectare annually', 'प्रति हेक्टेयर ₹10,000 वार्षिक', 'हेक्टर दर वार्षिक ₹10,000', 'https://agriculture.maharashtra.gov.in', 'Maharashtra Agriculture Department'),
('Soil Health Card Scheme', 'मिट्टी स्वास्थ्य कार्ड योजना', 'जमीन आरोग्य कार्ड योजना', 'Free soil testing', 'निःशुल्क मिट्टी परीक्षण', 'मोफत जमीन चाचणी', 'All farmers', 'सभी किसान', 'सर्व शेतकरी', 'Free soil test and recommendations', 'निःशुल्क मिट्टी परीक्षण और सुझाव', 'मोफत जमीन चाचणी आणि सूचना', 'https://soilhealth.dac.gov.in', 'Ministry of Agriculture'),
('Kisan Credit Card', 'किसान क्रेडिट कार्ड', 'किसान क्रेडिट कार्ड', 'Agricultural credit facility', 'कृषि ऋण सुविधा', 'कृषी ऋण सुविधा', 'All farmers', 'सभी किसान', 'सर्व शेतकरी', 'Short-term agricultural credit at subsidized rate', 'अनुदानित दर पर अल्पकालीन कृषि ऋण', 'अनुदानित दरावर अल्पकाळीन कृषी ऋण', 'https://www.nabard.org', 'NABARD')
ON CONFLICT DO NOTHING;

-- Insert regional statistics for Maharashtra districts
INSERT INTO regional_stats (district, crop_id, area_under_cultivation, production_tonnes, avg_yield_per_hectare, year) VALUES
('Nashik', (SELECT id FROM crops WHERE name = 'Sugar Cane'), 85000, 4500000, 52.94, 2024),
('Pune', (SELECT id FROM crops WHERE name = 'Sugar Cane'), 62000, 3200000, 51.61, 2024),
('Yavatmal', (SELECT id FROM crops WHERE name = 'Cotton'), 95000, 850000, 8.95, 2024),
('Nanded', (SELECT id FROM crops WHERE name = 'Jowar'), 125000, 125000, 1.0, 2024),
('Nashik', (SELECT id FROM crops WHERE name = 'Onion'), 45000, 900000, 20.0, 2024),
('Latur', (SELECT id FROM crops WHERE name = 'Turmeric'), 12000, 60000, 5.0, 2024),
('Madhya Pradesh', (SELECT id FROM crops WHERE name = 'Soybean'), 180000, 540000, 3.0, 2024)
ON CONFLICT DO NOTHING;
