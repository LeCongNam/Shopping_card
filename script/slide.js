
                var anhArr=[];
                var currentIndex=0;
                function loadAnh() {
                    for (var i = 0; i <= 3; i++) {
                         anhArr[i] = new Image();
                         anhArr[i] = `IMG/SlideShow/anh+${i}+.jpg`;
                        
                    }
                }

                function next() {
                    if (currentIndex < 3) {
                        currentIndex++;
                        document.getElementById("hoa").src= anhArr[currentIndex];
                        console.log(anhArr[currentIndex]);
                    }else if(currentIndex >=3){
                        currentIndex=0;
                        document.getElementById("hoa").src= anhArr[currentIndex];
                    }
                }
                
                function back() {
                    if (currentIndex >0) {
                        currentIndex--;
                        document.getElementById("hoa").src= anhArr[currentIndex];
                    }else if (currentIndex <= 0) {
                        currentIndex=3;
                        document.getElementById("hoa").src= anhArr[currentIndex];
                    }
                    
                }