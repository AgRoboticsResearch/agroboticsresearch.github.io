## Introduction
This page is the official website of the MegaFruits dataset, a large-scale, annotated segmentation dataset for fruits. This dataset was collected and annotated between October 20, 2023, and May 27, 2025, in Hangzhou, Zhejiang, China. Images were captured using an Honor Magic5 Pro smartphone and a GoPro Hero4 Black camera.

MegaFruits contains over 50,000 images with 1,098,843 instances, making it one of the largest fruit segmentation datasets available. In agricultural domains, large-scale datasets are crucial yet challenging to create due to environmental variability, crop seasonality, and the labor-intensive nature of pixel-level annotation. Thanks to [SDM (Segmentation-Description-Matching)](https://github.com/AgRoboticsResearch/SDM-D) method, which is a vision-language model tailored for agriculture. It enables the generation of high-quality pseudo masks without any pre-training and fine-tunning. Without the SDM-D methodology, contributing such an extensive segmentation dataset would have been practically impossible.

The dataset presents several challenges for fruit segmentation, including varying lighting conditions, shadows, occlusions, and the presence of branches, veins, and leaves. To rigorously assess method performance, a comprehensive fruit segmentation dataset is essential. Such a dataset should encompass various fruit types and provide abundant segmentation masks. The MegaFruits dataset was created to address this gap and facilitate future research.


### Contributors
- [Yanan Wang*](mailto:mmwang@zju.edu.cn)
- [Yu Gao*](mailto:gao-yu@nuaa.edu.cn)
- [Long Su*](mailto:sulong@stu.xjtu.edu.cn)
- [Zhenghao Fei*](https://github.com/ZhenghaoFei)

_*ZJU-Hangzhou Global Scientific and Technological Innovation Center & College of Biosystems Engineering and Food Science, Zhejiang University._

## MegaFruits Dataset
The MegaFruits dataset comprises four subsets: Mega_Strawberry, Mega_Blueberry, Mega_Peach, and Mega_Waxberry. The Mega_Strawberry includes 20,242 images with 569,382 pseudo masks, and the Mega_Waxberry includes 15,000 images with xx,xxx pseudo masks. The labels of the two subsets are generated using our Segmentation-Description-Matching method (https://github.com/AgRoboticsResearch/SDM-D.git). The Mega_Blueberry consists of 2,540 images with 20,656 masks, and the Mega_Peach subset contains 2,400 images with 10,129 instances.

To ensure unbiased evaluation, all test sets were independently collected from distinct orchard regions, separate from those used for training data. This dataset supports object detection, semantic segmentation, and instance segmentation tasks.

### Dataset Distribution
![](dataset1.png)



### Labeling Policy
Three trained personnel carefully labeled the Mega_Blueberry and Mega_Peach using the Labelme tool. Annotation criteria required creating precise polygonal boundaries around visible fruit, ensuring bare fruit skin was labeled while occluded parts were excluded. Instances such as background blueberries that were indiscernible due to distance, occlusion, position at the image edge, or immaturity were left unlabeled. All labels are provided in the standard YOLO format. Users can apply them for object detection, semantic segmentation and instance segmentation tasks. 

The pseudo labels of Mega_Strawberry and Mega_Waxberry are also provided as segmentation masks that are the same size as the original images. For each instance, we provide an individual mask where pixel value 0 represents the background and pixel value 1 represents the target object.

### Examples
Below are examples of our high quality pixel annotations.


![](4-dataset-end.png)
![](mega_strawberry1.png)
![](mega_waxberry1.png)


## Using the dataset
Please include the following acknowledgment:

```
@article{title = "Learn from Foundation Model: Fruit Detection Model without Manual Annotation",
year = "2024",
doi = "https://doi.org/10.48550/arXiv.2411.16196",
author = "Yanan Wang, Zhenghao Fei, Ruichen Li, Yibin Ying"
}
```

To inform us of a publication using MegaFruits dataset, or to give us any other feedback, please contact [Yanan Wang](mailto:mmwang@zju.edu.cn).

## Download
To download the database: [MegaFruits](https://www.kaggle.com/datasets/mmwang0/megafruits)

## License
This dataset is made freely available to academic and non-academic entities for non-commercial purposes such as academic research, teaching, scientific publications, or personal experimentation. Permission is granted to use the data given that you agree:

1. That the dataset comes "AS IS", without express or implied warranty. Although every effort has been made to ensure accuracy, we do not accept any responsibility for errors or omissions.
2. That you include a reference to the MegaFruits Dataset in any work that makes use of the dataset. For research papers, cite our preferred publication as listed on [Using the dataset](#using-the-dataset) Section.
3. That you do not distribute this dataset or modified versions. It is permissible to distribute derivative works in as far as they are abstract representations of this dataset (such as models trained on it or additional annotations that do not directly include any of our data) and do not allow to recover the dataset or something similar in character.
4. That you may not use the dataset or any derivative work for commercial purposes as, for example, licensing or selling the data, or using the data with a purpose to procure a commercial gain.
5. That all rights not expressly granted to you are reserved by us.
