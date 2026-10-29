---
title: Applied Deep Learning
tagline: Four deep learning systems — image classification, pixel-level segmentation, generative modelling and sentiment analysis — built, diagnosed and explained.
course: DAT300 · NMBU
year: '2025'
role: Student — model design, training & interpretation
order: 2
repo: https://github.com/Mehdij1511/DAT300---Applied-Deep-Learning
stack: [Python, TensorFlow / Keras, PyTorch, scikit-learn, NumPy, Matplotlib, Seaborn]
cover: /projects/applied-deep-learning/seg_overlay.png
coverKind: image
metrics:
  - { value: '4', label: 'Architectures' }
  - { value: 'CNN', label: 'Image classification' }
  - { value: 'U-Net', label: 'Semantic segmentation' }
  - { value: 'VAE', label: 'Generative model' }
---

## The question behind the course

In applied deep learning the hard part is rarely *"can I write a model?"*. It is:

- Is the model learning the right thing?
- Why does it fail on some inputs?
- What does it actually *see*?
- How do I explain its decisions?

> Deep learning is not just about accuracy — it is about understanding, diagnosing, visualising and improving.

![Deep learning workflow](/projects/applied-deep-learning/deep_learning_workflow.png)

## 01 — CNNs: learning visual features

Convolutional networks for image classification, with filter inspection and activation maps to see how early layers detect edges and textures and deeper layers build up shapes.

![Learned convolution filters](/projects/applied-deep-learning/conv_filters.png)

## 02 — U-Net: semantic segmentation

Instead of one label per image, the model predicts a mask for every pixel. This required dense prediction, skip connections to preserve spatial detail, and careful evaluation at object boundaries.

![U-Net segmentation overlay](/projects/applied-deep-learning/seg_overlay.png)

## 03 — Variational Autoencoders

Compressing images into a low-dimensional latent space and reconstructing them — a hands-on look at representation learning, generative modelling and the trade-off between compression and reconstruction quality.

![VAE reconstructions](/projects/applied-deep-learning/vae_recon.png)

## 04 — Sentiment analysis

Text classification from word patterns: tokenisation, embeddings and sequence models, with frequency analysis to interpret what drives each class.

![Sentiment word cloud](/projects/applied-deep-learning/wordcloud.png)

## Diagnosing training

Training curves reveal more than a final score — over- and under-fitting, learning-rate problems and data issues all show up here first.

![Training and validation curves](/projects/applied-deep-learning/training.png)

## What I learned

- Data quality, preprocessing and architecture choices matter more than model size
- Model inspection matters as much as model performance
- Visualisation exposes bias, overfitting and poor representations
- A model is useful when you can explain how it behaves and where it fails
