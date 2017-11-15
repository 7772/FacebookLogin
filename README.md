# Facebook Login For React Native
---

#### React Native 로 페이스북 로그인 연동을 적용하는 방법을 설명하는 리포지토리 입니다.


전체적인 진행은 [Facebook Login](https://github.com/facebook/react-native-fbsdk) 를 참고했습니다.

위 사이트를 가셔서 진행해보셔도 되고, 제가 정리한 방법을 참고하실 분들은 본 리포지토리의 README.md 를 참고하시면 됩니다.

본 레포지토리는 ios 만 적용하여 실행했습니다.

추후에 android 도 업데이트 하도록 하겠습니다.

---

**개발환경**

macOS Sierra version 10.12.6

react-native: 0.50.3

react-native-cli: 2.0.1

Xcode: Version 9.1

---

<image src=./images/readMe/loginLogo.png width=240 height= 500> <image src=./images/readMe/loginConfirm.png width=240 height= 500> <image src=./images/readMe/loginScreen.png width=240 height= 500>

---

##### 1. 리액트 네이티브 예제 만들기
    $ react-native init FacebookLogin

##### 2. 생성된 프로젝트 디렉토리로 이동하기
    $ cd FacebookLogin

##### 3. fbsdk 라이브러리 install & link 하기
    $ react-native install react-native-fbsdk
    $ react-native link react-native-fbsdk

***여기에서 앱을 실행하면 아직 아래 단계를 진행하지 않아 앱이 올바르게 실행되지 않습니다.***
***아래 단계를 먼저 진행해주세요.***

##### 4. ios 를 위한 Facebook SDK 가이드 따라하기
이 부분에서 가장 많은 실수가 나옵니다. 천천히 따라해주세요.
* [Facebook SDK 가이드](https://developers.facebook.com/docs/ios/getting-started/) <-- 클릭
    * 여기서, 'ios용 빠른시작' 이 아닌, 수동구성의 1단계~4단계 를 따라하겠습니다.
    * ***[주의] 5단계, 6단계 는 따라하지 않으셔야 본 환경에서 올바르게 동작합니다.***


* '1단계: ios용 Facebook 앱 설정 구성' 에서 [Facebook 앱 대시보드](https://developers.facebook.com/apps) 열기
    * 로그인이 되어있지 않다면, 먼저 로그인 해주세요.
    * 오른쪽 '+ 새 앱 추가' 를 클릭해주세요.
    <image src=./images/readMe/fbNewApp.png>

    * 당신의 이름과 이메일을 입력해주세요. 그리고 나서 앱 ID 만들기 버튼을 클릭하세요.

    * 왼쪽 상태바에서 '설정' 을 클릭해주세요.
    <image src=./images/readMe/fbSetting.png height=400>

    * 설정 탭에 들어오시면 하단에 '+ 플랫폼 추가' 버튼이 있습니다. 클릭하시면, 여러 플랫폼이 나오는데 여기서 'ios' 를 선택합니다.

    * 아래와 같이 나오면 성공 입니다.
    <image src=./images/readMe/fbFlatform.png height=400>

    * 이제 추가된 항목에서 '번들 ID' 를 채워야 합니다. 먼저 앞에서 생성한 React Native 프로젝트 디렉토리로 이동해 주세요.
    <image src=./images/readMe/fbDirectory.png height=400>

    * ios 디렉토리로 이동하신 다음 FacebookLogin.xcodeproj 파일을 실행 시켜주세요.

    * 이제 생성된 프로젝트의 번들ID 를 찾아야 합니다. 처음 FacebookLogin.xcodeproj 을 실행시킨 화면에서 좌측칸에 보이는 FacebookLogin 을 클릭하시면 General, Capabilities ... 등등의 탭이 보입니다.

    * general 탭에서 번들ID 를 복사 해주세요.
    <image src=./images/readMe/fbBundleID.png height=400>

    * 다시 Facebook 앱설정 탭에 돌아와서, '번들ID' 항목에 복사한 번들ID를 붙여넣기 해주세요.

    * 그럼 아래와 같이 선택할 수 있는 칸이 나오게 되고, 해당 버튼을 클릭해주면 번들ID 가 등록됩니다.
    <image src=./images/readMe/fbBundleIDClick.png height=400>

    * 다음으로 아래 'SSO' 토글을 활성화 상태로 바꿔주세요. 그 다음 우측 하단에 '변경 내용 저장' 을 클릭합니다.
    <image src=./images/readMe/fbSSO.png height=400>

    * 이제 1 단계 설정이 끝났습니다. 이어서 계속 진행 해주세요.


* '2단계: ios용 Facebook SDK 다운로드' 단계에서 'ios SDK 다운로드' 버튼을 클릭해주세요. 

    * 그러면 창 이동 없이 FacebookSDKS.zip 파일이 다운로드 됩니다.

    * 다운로드된 파일을 압축해제 합니다.

    * 파일명을 FacebookSDK 로 바꿉니다.

    * DOCUMENT 디렉토리에 압축 해제된 FacebookSDK 파일을 옮깁니다.
    <image src=./images/readMe/fbSDK.png height=400>

    * 2 단계가 끝났습니다. 이어서 계속 진행 해주세요.

* '3단계: 프로젝트에 SDK 추가'

    * FacebookLogin.xcodeproj 앱을 열어줍니다.

    * 왼쪽 프로젝트 디렉토리 상태창에서 FacebookLogin 을 마우스 오른쪽 버튼 클릭 후 'New Group' 을 선택합니다.
    <image src=./images/readMe/fbNewGroup.png height=400>

    * Group 이름을 Frameworks 로 설정합니다.

    * 압축 해제 된 FacebookSDK 디렉토리를 열고 Bolts.framework, FBSDKCoreKit.framework, FBSDKLoginKit.framework, FBSDKShareKit.framework 을 생성한 'New Group' 에 마우스로 끌어 추가 시킵니다.
    <image src=./images/readMe/fb4file.png height=400>

    * 마우스로 아래 그림과 같이 드래그 해주세요.
    <image src=./images/readMe/fbDragFiles.png height=400>

    * 올바르게 드래그 하시면, 다음과 같은 창이 뜨게 됩니다. 체크 표시를 Create groups 에 해주시고 Finish 버튼을 클릭해주세요.
    <image src=./images/readMe/fbCreateSDK.png height=400>

    * Frameworks 그룹 안에 아래와 같이 4개의 framework 파일이 생성되었으면 성공입니다. 
    <image src=./images/readMe/fbCompleteGroup.png height=400>

    * 다음으로 
        1. Build Settings 탭을 열어 줍니다.
        2. 검색창에 'frameworks' 를 검색합니다.
        3. 아래 Search Paths 에 Framework Search Paths 항목의 우측을 더블클릭 합니다.
    <image src=./images/readMe/fbBuildSettings.png height=400>

    * 작은 창이 하나 열리게 됩니다. 그리고 나서, 
        1. 좌측 하단에 + 버튼을 클릭합니다.
        2. 첫번째 열이 활성화 되면 그 안에 '~/Documents/FacebookSDK' 라고 기입합니다.
    <image src=./images/readMe/fbAddPath.png height=400>

    * 3 단계가 끝났습니다. 이어서 계속 진행 해주세요.

* '4단계: Xcode 프로젝트 구성'

    * FacebookLogin.xcodeproj 의 info.plist 파일을 선택합니다.

    * 오른쪽 버튼을 클릭하고 Open As -> Source Code 를 선택해줍니다.
    <image src=./images/readMe/fbInfo.png height=400>

    * 코드 가장 아래 부분에 마지막 </dict> 요소 바로 앞에 다음 코드를 **수정** 하여 삽입합니다.

    ```
    <key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleURLSchemes</key>
            <array>
            <string>fb{your-app-id}</string>
            </array>
        </dict>
    </array>
    <key>FacebookAppID</key>
    <string>{your-app-id}</string>
    <key>FacebookDisplayName</key>
    <string>{your-app-name}</string>
    <key>LSApplicationQueriesSchemes</key>
    <array>
        <string>fbapi</string>
        <string>fb-messenger-api</string>
        <string>fbauth2</string>
        <string>fbshareextension</string>
    </array>
    <key>NSPhotoLibraryUsageDescription</key>
    <string>{human-readable reason for photo access}</string>
    ```

    1. 일단 코드를 보시면 { } 부분을 당신의 설정에 맞게 바꾸어 주어야 합니다.

    2. {your-app-id} 는 당신의 앱 아이디인데, 오로지 숫자로 구성되어 있습니다. 위에서 살펴본 Facebook 대시보드를 보시면 찾을 수 있습니다. 아래 그림을 참고해주세요.
    <image src=./images/readMe/fbAppID.png height=400>


        2-1. {your-app-id} 는 총 2번 나오는데 첫번째는 앞에 fb 를 붙여주시면 되고, 다음은 붙이지 않은 채로 오직 숫자만 기입하시면 됩니다.

    3. {your-app-name} 은 당신의 앱의 이름을 작성하면 됩니다. 저의 경우는 Landon 입니다.

    4. 마지막 {human-readable reason for photo access} 은 앱에서 사진에 접근하는 이유를 표시하는 부분 입니다. 저는 간단히 'Need Photo' 라고 쓰겠습니다.

    5. 다음과 같은 모습으로 코드를 수정하여 붙여넣었습니다.
    <image src=./images/readMe/fbCompleteInfo.png height=400>

***이제 모든 과정이 끝났습니다.***
***React Native 는 공식 문서상 5,6 단계는 필요하지 않습니다.***
***앱을 실행하여 올바르게 동작하는지 확인하겠습니다.***

1. 앱 실행하기
    ```
    $ react-native run-ios
    ```
2. 다음과 같은 화면이 출력되었으면 셋팅이 완료된 것 입니다.

<image src=./images/readMe/fbSettingSuccess.png height=400>


3. 코드 수정하기
    * 모든 셋팅이 완료되었으므로, 코드를 수정하여 로그인 버튼을 만들겠습니다.
    * 당신이 사용하는 에디터를 이용하여, App.js 파일을 열어주세요.
    <image src=./images/readMe/fbApp.png height=400>

    * App.js 전체를 삭제하시고 다음 코드를 붙여 넣고 저장해주세요.

    ```
    'use strict';

    const FBSDK = require('react-native-fbsdk');

    import React, {Component} from 'react';
    import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    } from 'react-native';
    const {LoginButton, ShareDialog} = FBSDK;

    export default class App extends Component {
    constructor(props) {
        super(props);
        const shareLinkContent = {
        contentType: 'link',
        contentUrl: 'https://www.facebook.com/',
        };

        this.state = {
        shareLinkContent: shareLinkContent,
        };
    }

    shareLinkWithShareDialog() {
        var tmp = this;
        ShareDialog.canShow(this.state.shareLinkContent)
        .then(function(canShow) {
            if (canShow) {
            return ShareDialog.show(tmp.state.shareLinkContent);
            }
        })
        .then(
            function(result) {
            if (result.isCancelled) {
                alert('Share cancelled');
            } else {
                alert('Share success with postId: ' + result.postId);
            }
            },
            function(error) {
            alert('Share fail with error: ' + error);
            },
        );
    }

    render() {
        return (
        <View style={styles.container}>
            <LoginButton />
            <TouchableHighlight
            style={styles.share}
            onPress={this.shareLinkWithShareDialog.bind(this)}>
            <Text style={styles.shareText}>Share link with ShareDialog</Text>
            </TouchableHighlight>
        </View>
        );
    }
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    });
    ```


    ***위 코드는 [Facebook Github](https://github.com/facebook/react-native-fbsdk) 를 참고하였습니다.***



이제 모든 과정이 끝났습니다.
앱을 열어 command + R 버튼을 눌러 새로고침 해보세요.




<image src=./images/readMe/fbComplete1.png height=400> <image src=./images/readMe/fbComplete2.png height=400> <image src=./images/readMe/fbComplete3.png height=400> <image src=./images/readMe/fbComplete4.png height=400>


질문이나 기타 수정이 필요한 사항은 [Issue](https://github.com/7772/FacebookLogin/issues) 를 통해 공유해주시면 됩니다.





