# Tochtli AI Studio

Tochtli AI Studio is an AI-powered brand automation and content planning platform built for Tochtli Cultural Wear. It helps a small cultural clothing brand generate stronger social media posts, newsletters, and campaign ideas faster by combining cultural reference materials, historical brand content, product context, and user feedback into one guided workflow.

**Impact:** Designed to reduce manual content planning and drafting work by roughly **80-90%** while preserving cultural accuracy, brand voice, and product relevance.

## Problem

Small businesses rarely have dedicated marketing teams, content strategists, and researchers working in parallel. Planning what to post, writing captions, selecting products to promote, finding the right supporting imagery, and staying culturally accurate becomes time-intensive and hard to scale.

## Solution

Tochtli AI Studio turns scattered cultural reference materials, product information, and prior brand content into a searchable AI knowledge system. Instead of starting from a blank page, the brand gets context-aware support for ideation, drafting, campaign planning, and media selection.

## Key Features

- Ingests PDF books and cultural reference materials
- Extracts page-level text, images, and metadata
- Creates local embeddings with SentenceTransformers
- Stores searchable knowledge in PostgreSQL + pgvector
- Organizes cultural material by book, topic, and theme
- Retrieves relevant context for posts and newsletters
- Generates content ideas, captions, newsletter drafts, and campaign plans
- Prepares for Shopify product and inventory recommendations
- Uses metadata-driven image retrieval for product and cultural visuals
- Learns from user edits and feedback over time to better match brand voice

## Tech Stack

- Python
- FastAPI
- PyMuPDF
- SentenceTransformers
- PostgreSQL
- pgvector
- LangChain
- LangGraph
- Shopify Admin API
- React / Next.js for future dashboard UI

## Skills Demonstrated

- AI systems design
- Retrieval-Augmented Generation
- Agent and workflow orchestration
- PDF ingestion pipelines
- Semantic search
- Vector database design
- Backend API design
- Data modeling
- Metadata-driven retrieval
- Business automation
- Human-in-the-loop feedback systems

## Impact

Tochtli AI Studio shows how AI can help a small business compete with larger teams by automating research, ideation, drafting, and media selection without reducing quality. The product is designed as a real internal operating tool for brand execution, not as a one-off chatbot demo.
