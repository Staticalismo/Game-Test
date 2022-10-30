package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.app.VoiceInteractor;
import android.content.Intent;
import android.content.DialogInterface;
import android.os.Bundle;
import android.app.AlertDialog;
import android.os.Handler;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebChromeClient;
import android.webkit.JsResult;
import android.webkit.WebViewClient;

import androidx.appcompat.widget.Toolbar;

public class MainActivity extends AppCompatActivity {

    private Toolbar toolbar;

    private WebView mWebview;

    private WebView view;



    public void onClick(View view) {
        startActivity(new Intent(MainActivity.this, HomeActivity.class));
    }
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        toolbar = findViewById(R.id.toolbar);

        Toolbar toolbar = findViewById(R.id.toolbar);

        setSupportActionBar(toolbar);


        setContentView(R.layout.activity_main);
        mWebview = (WebView) findViewById(R.id.WebView);
        mWebview.setWebViewClient(new WebViewClient());

        WebSettings webSettings = mWebview.getSettings();
        webSettings.setJavaScriptEnabled(true);
        mWebview.setWebChromeClient(new WebChromeClient());



        mWebview.setWebChromeClient(new WebChromeClient() {

            @Override
            public boolean onJsAlert(WebView view, String url, String message, final JsResult result) {
                AlertDialog dialog = new AlertDialog.Builder(view.getContext()).
                        setTitle("Pas N(ou)'T blanc").
                        setMessage(message).
                        setPositiveButton("OK", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                //do nothing
                            }
                        }).create();
                dialog.show();
                result.confirm();
                return true;
            } });





        mWebview.loadUrl("file:///android_asset/index.html");






    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu, menu);
        return super.onCreateOptionsMenu(menu);


    }


}

